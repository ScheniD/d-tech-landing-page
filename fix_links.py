import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace links based on data-path or text logic
content = content.replace('href="#" data-path="impressum"', 'href="impressum.html" data-path="impressum"')
content = content.replace('href="#" data-path="datenschutz"', 'href="datenschutz.html" data-path="datenschutz"')
content = content.replace('href="#" data-path="home"', 'href="index.html" data-path="home"')

# Header Nav Links
content = content.replace('href="#" data-path="dienstleistungen"', 'href="#services" data-path="dienstleistungen"')
content = content.replace('href="#" data-path="referenzen"', 'href="#referenzen" data-path="referenzen"')
content = content.replace('href="#" data-path="ueber-mich"', 'href="#ueber-mich" data-path="ueber-mich"')
content = content.replace('href="#" data-path="warum-wir"', 'href="#warum-wir" data-path="warum-wir"')
content = content.replace('href="#" data-path="erstgespraech-buchen"', 'href="#kontakt" data-path="erstgespraech-buchen"')

# Replace image source for logo to local path instead of googleusercontent
# The user's new HTML uses a Google proxy URL for the logo, let's fix it back to assets/logo.webp
content = re.sub(r'src="https://lh3\.googleusercontent\.com/aida/[^"]+"', 'src="assets/logo.webp"', content)

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Links and assets fixed!")
