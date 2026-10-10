import re

def get_template_parts():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Split index.html into Top (Head + Header), Middle (Main), Bottom (Footer)
    top_match = re.search(r'(.*?<header.*?</header>\s*<main[^>]*>).*?(<footer.*)', html, re.DOTALL)
    if not top_match:
        print("Error parsing index.html")
        return None, None
        
    top = top_match.group(1)
    bottom = top_match.group(2)
    return top, bottom

def convert_subpage(filename, top, bottom, title):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract the <main class="legal-content">...</main>
    main_match = re.search(r'<main class="legal-content">(.*?)</main>', content, re.DOTALL)
    if not main_match:
        print(f"Could not find main content in {filename}")
        return
        
    inner_content = main_match.group(1)
    
    # Optional: Convert some classes to Tailwind
    # Let's wrap inner_content in a nice Tailwind container that works with standard HTML tags
    # The new design has text-body-md and bg-surface-base
    inner_content = f"""
    <div class="w-full max-w-4xl mx-auto px-6 py-20 bg-surface-raised rounded-3xl mt-12 mb-20 shadow-xl prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary">
        {inner_content}
    </div>
    """
    
    # In 'top', we can replace the <title> with the new title
    new_top = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', top)
    # The index.html doesn't have a <title> tag explicitly? Oh wait, it DOES have one from the injection.
    if '<title' not in new_top:
        new_top = new_top.replace('</head>', f'<title>{title}</title>\n</head>')
    else:
        new_top = re.sub(r'<title.*?</title>', f'<title>{title}</title>', new_top)
    
    # Assemble
    new_page = new_top + inner_content + '</div></main>' + bottom
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_page)
    print(f"Updated {filename}")

top, bottom = get_template_parts()
if top and bottom:
    convert_subpage('impressum.html', top, bottom, 'Impressum | D-Tech Solutions')
    convert_subpage('datenschutz.html', top, bottom, 'Datenschutz | D-Tech Solutions')
    convert_subpage('danke.html', top, bottom, 'Vielen Dank | D-Tech Solutions')

