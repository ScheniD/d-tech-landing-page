import re
with open('danke.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('text-headline-xl', 'text-headline-xl-mobile md:text-headline-xl')

with open('danke.html', 'w', encoding='utf-8') as f:
    f.write(html)
