import json
import os
import re
from bs4 import BeautifulSoup

def clean_html_content(html_content):
    if not html_content:
        return ""
    
    # If it's already just the body, it might not have the full HTML tags
    if '<div class="article-entry"' not in html_content:
        # Check if it contains <!DOCTYPE html>
        if '<!DOCTYPE html>' not in html_content:
            return html_content # Already clean?
            
    soup = BeautifulSoup(html_content, 'html.parser')
    article_body = soup.find('div', class_='article-entry', itemprop='articleBody')
    
    if article_body:
        # Convert back to string
        content = str(article_body)
        # Remove the outer div if desired, or keep it
        return content
    
    # Fallback: if we can't find the specific div, but it's a full page, try to find the main content
    main_section = soup.find('section', id='main')
    if main_section:
        return str(main_section)
        
    return html_content

def process_news_data():
    json_path = 'src/data/newsData.json'
    with open(json_path, 'r', encoding='utf-8') as f:
        news_data = json.load(f)
    
    updated_count = 0
    for news_id, post in news_data.items():
        # Check if we need to update
        needs_update = False
        if not post.get('content') or '<!DOCTYPE html>' in post.get('content'):
            needs_update = True
            
        if needs_update:
            # Try to find the file
            legacy_path = post.get('path')
            if legacy_path:
                full_path = os.path.join('legacy/2025', legacy_path)
                if not os.path.exists(full_path):
                    # Try without 2025?
                    full_path = os.path.join('legacy', legacy_path)
                
                if os.path.exists(full_path):
                    print(f"Updating {news_id} from {full_path}")
                    with open(full_path, 'r', encoding='utf-8') as f_html:
                        html_content = f_html.read()
                        clean_content = clean_html_content(html_content)
                        post['content'] = clean_content
                        updated_count += 1
                else:
                    print(f"Warning: File not found for {news_id}: {full_path}")
    
    # Save back
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(news_data, f, indent=2, ensure_ascii=False)
    
    print(f"Finished. Updated {updated_count} posts.")

if __name__ == "__main__":
    process_news_data()
