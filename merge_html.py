import re
import os

old_path = 'index.html'
new_path = '/Users/dominik/Downloads/stitch_website_audit_and_optimization_plan/d_tech_solutions_modernized_homepage_redesign/code.html'

with open(old_path, 'r', encoding='utf-8') as f:
    old_html = f.read()

with open(new_path, 'r', encoding='utf-8') as f:
    new_html = f.read()

# Extract head scripts and meta tags from old_html (we want SEO, Open Graph, structured data, Vercel scripts, cookie banner)
# We will match everything between <meta name="description" and the end of gtag script
head_content_match = re.search(r'(<meta name="description".*?</script>\s*)</head>', old_html, re.DOTALL)

if head_content_match:
    head_injection = head_content_match.group(1)
    
    # Remove old fonts, style.css and script.js so they don't interfere with the new Tailwind layout
    head_injection = re.sub(r'<link rel="preconnect"[^>]+>\s*', '', head_injection)
    head_injection = re.sub(r'<link href="https://fonts\.googleapis\.com[^>]+>\s*', '', head_injection)
    head_injection = re.sub(r'<link rel="stylesheet" href="style\.css\?v=\d+">\s*', '', head_injection)
    head_injection = re.sub(r'<script src="script\.js\?v=[\d\.]+" defer></script>\s*', '', head_injection)

    # Inject into new_html just before </head>
    new_html = new_html.replace('</head>', head_injection + '\n</head>')
    
    # Save as index.html
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    
    print("Successfully merged and replaced index.html")
else:
    print("Could not extract head content from old index.html")
