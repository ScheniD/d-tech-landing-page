import re

# Read the old index.html to extract the head content (meta tags, seo, vercel, cookie banner, gtag)
with open('index.html', 'r', encoding='utf-8') as f:
    old_html = f.read()

# Read the new HTML provided by user (I'll save it to new_index.html first)
with open('new_index.html', 'r', encoding='utf-8') as f:
    new_html = f.read()

# Extract from old_html: meta description up to the end of the gtag script
head_content_match = re.search(r'(<meta name="description".*?</script>\s*)</head>', old_html, re.DOTALL)
if head_content_match:
    head_injection = head_content_match.group(1)
    
    # Remove the old fonts and style.css link from the injection to avoid conflict
    head_injection = re.sub(r'<link rel="preconnect".*?>\s*', '', head_injection)
    head_injection = re.sub(r'<link href="https://fonts\.googleapis\.com/css2\?family=Inter.*?rel="stylesheet">\s*', '', head_injection)
    head_injection = re.sub(r'<link rel="stylesheet" href="style\.css\?v=\d+">\s*', '', head_injection)
    
    # We'll also remove script.js for a moment because the new HTML is fully tailwind and the old script.js might break it (querySelectors etc.)
    head_injection = re.sub(r'<script src="script\.js\?v=[\d\.]+" defer></script>\s*', '', head_injection)

    # Inject into new html before </head>
    new_html = new_html.replace('</head>', head_injection + '\n</head>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("index.html updated successfully!")
