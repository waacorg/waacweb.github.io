import json
from bs4 import BeautifulSoup

def extract_collaboration():
    with open('legacy/cooperation/index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    main_div = soup.find('div', class_='main')
    
    categories = []
    current_category = None
    
    # Iterate through h2 (categories) and ol (project lists)
    for element in main_div.find_all(['h2', 'ol']):
        if element.name == 'h2':
            current_category = {
                "category": element.get_text(strip=True),
                "projects": []
            }
            if current_category["category"] != "Contact Information":
                categories.append(current_category)
        elif element.name == 'ol' and current_category:
            lis = element.find_all('li')
            for li in lis:
                a = li.find('a')
                if a:
                    title = a.get_text(strip=True)
                    href = a.get('href', "")
                    # Fix relative paths if necessary
                    if not href.startswith('http'):
                        href = f"/cooperation/{href}.html"
                    
                    current_category["projects"].append({
                        "title": title,
                        "link": href
                    })
    
    return categories

if __name__ == "__main__":
    collab_data = extract_collaboration()
    print(f"Extracted {len(collab_data)} categories.")
    with open('src/data/collaborationData.json', 'w', encoding='utf-8') as f:
        json.dump(collab_data, f, indent=2, ensure_ascii=False)
