import json
import os
from bs4 import BeautifulSoup
import re

# Base directory for the project
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML_DIR = os.path.join(BASE_DIR, 'public', 'cooperation', 'items', 'EN')
OUTPUT_FILE = os.path.join(BASE_DIR, 'src', 'data', 'collaborationDetails.json')
INPUT_FILE = os.path.join(BASE_DIR, 'src', 'data', 'collaborationData.json')

def extract_details():
    # Read the existing data to get the list of files
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        categories = json.load(f)

    project_details = []

    for category in categories:
        for project in category['projects']:
            link = project['link']
            # Extract filename from link (e.g., /cooperation/items/EN/1-embodied.html -> 1-embodied.html)
            filename = os.path.basename(link)
            file_path = os.path.join(HTML_DIR, filename)

            if not os.path.exists(file_path):
                print(f"Warning: File not found: {file_path}")
                continue

            with open(file_path, 'r', encoding='utf-8') as f:
                soup = BeautifulSoup(f, 'html.parser')

            # Extract the main content div
            main_content = soup.find('div', class_='main')
            
            content_html = ""
            if main_content:
                # Remove the generic "Directory" header and links if present, as we might want to restyle or remove TOC
                # For now, let's just keep the content but strip the 'Directory' h1 if it exists
                directory_h1 = main_content.find('h1', id='Directory')
                if directory_h1:
                   directory_h1.decompose()
                
                # Update image sources to be absolute from public
                for img in main_content.find_all('img'):
                    if img.get('src') and not img['src'].startswith('http'):
                        # Adjust relative paths if necessary. 
                        # Assuming legacy paths like /images/... work if they are in public/images
                        pass

                # Get the inner HTML
                content_html = str(main_content)
                
                # Basic cleanup
                content_html = content_html.replace('class="headerlink"', 'class="hidden"') # Hide headerlinks usually used for TOC anchors
                
            else:
                print(f"Warning: No main content found in {filename}")

            # Create ID from filename (remove extension)
            project_id = os.path.splitext(filename)[0]

            project_details.append({
                "id": project_id,
                "title": project['title'],
                "category": category['category'],
                "content": content_html
            })

    # Save to JSON
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(project_details, f, indent=2, ensure_ascii=False)

    print(f"Extracted details for {len(project_details)} projects to {OUTPUT_FILE}")

if __name__ == "__main__":
    extract_details()
