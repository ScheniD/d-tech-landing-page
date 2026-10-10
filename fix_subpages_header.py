import re

with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# Extract the header block from index.html
header_match = re.search(r'<header.*?</header>', index_html, re.DOTALL)
if header_match:
    new_header = header_match.group(0)
    
    for page in ['impressum.html', 'datenschutz.html', 'danke.html']:
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the header block in the page
        content = re.sub(r'<header.*?</header>', new_header, content, flags=re.DOTALL)
        
        with open(page, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated header in {page}")
