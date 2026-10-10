import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Change grid from 2 cols to 3 cols
html = html.replace('<div class="grid grid-cols-1 md:grid-cols-2 gap-6">', '<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">')

# Remove the 4th testimonial
# We can use regex to find the 4th testimonial and remove it.
# The 4th testimonial starts with <!-- Testimonial 4 -->
pattern = r'<!-- Testimonial 4 -->.*?</div>\s*</div>\s*</section>'
replacement = '</div>\n</section>'
html = re.sub(pattern, replacement, html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
