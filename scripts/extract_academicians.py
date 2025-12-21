import json
from bs4 import BeautifulSoup

def extract_academicians():
    with open('legacy/Academician/index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    source_div = soup.find('div', id='acad-source')
    if not source_div:
        # Fallback to searching the whole main content if not in the source-div
        source_div = soup.find('div', class_='main')
        
    academicians = []
    
    # Each academician is usually a h3 followed by a p (image) and a ul
    h3s = source_div.find_all('h3')
    for h3 in h3s:
        name = h3.get_text(strip=True)
        if not name:
            continue
            
        # Try to find the image in the next paragraph
        next_p = h3.find_next_sibling('p')
        image_src = ""
        if next_p:
            img = next_p.find('img')
            if img:
                image_src = img.get('src', "")
        
        # Try to find the ul with details
        next_ul = h3.find_next_sibling('ul')
        details = {}
        if next_ul:
            lis = next_ul.find_all('li')
            for li in lis:
                text = li.get_text(strip=True)
                if ':' in text:
                    key, val = text.split(':', 1)
                    details[key.lower().strip()] = val.strip()
        
        academicians.append({
            "id": name.replace(' ', '-').replace('é', 'e').replace('ü', 'u').replace('ö', 'o').replace('á', 'a').replace('ł', 'w').replace('–', '-'),
            "name": name,
            "image": image_src,
            "role": details.get('honors', 'WAAC Academician'), # Often 'honors' contains 'WAAC Academician'
            "description": details.get('field of research', details.get('field', '')),
            "institution": details.get('institution', details.get('honors', '')) # We might need to split honors/institution
        })
    
    return academicians

if __name__ == "__main__":
    acads = extract_academicians()
    print(f"Extracted {len(acads)} academicians.")
    with open('src/data/academiciansData.json', 'w', encoding='utf-8') as f:
        json.dump(acads, f, indent=2, ensure_ascii=False)
