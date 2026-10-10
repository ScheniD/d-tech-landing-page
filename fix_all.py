import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix navigation links based on data-path
links_map = {
    'home': 'index.html',
    'dienstleistungen': '#services',
    'referenzen': '#referenzen',
    'ueber-mich': '#ueber-mich',
    'warum-wir': '#warum-wir',
    'erstgespraech-buchen': '#kontakt',
    'impressum': 'impressum.html',
    'datenschutz': 'datenschutz.html'
}

for path, href in links_map.items():
    # regex to match data-path="path" and href="#" (in any order)
    # Actually, let's just find data-path="X" and replace the nearby href="..."
    pattern = r'(data-path="' + path + r'"[^>]*?)href="[^"]*"'
    html = re.sub(pattern, r'\1href="' + href + '"', html)
    pattern2 = r'href="[^"]*"([^>]*?data-path="' + path + r'")'
    html = re.sub(pattern2, r'href="' + href + r'"\1', html)

# Fix the contact form
form_pattern = r'<form class="space-y-6" id="contact-form"[^>]*>'
replacement_form = '''<form class="space-y-6" id="contact-form" action="https://api.web3forms.com/submit" method="POST">
<input type="hidden" name="access_key" value="b105e343-1e04-4899-a9da-21a05eed1a1a">
<input type="hidden" name="subject" value="Neue Projektanfrage via Landing Page (Redesign)">
<input type="hidden" name="redirect" value="https://dtechsolutions.eu/danke.html">
<input type="checkbox" name="botcheck" style="display: none;">'''
html = re.sub(form_pattern, replacement_form, html)

# Fix form inputs missing 'name' attributes
html = html.replace('id="name" placeholder=', 'name="name" id="name" placeholder=')
html = html.replace('id="email" placeholder=', 'name="email" id="email" placeholder=')
html = html.replace('id="message" placeholder=', 'name="message" id="message" placeholder=')

# We also need a simple mobile menu toggle.
# Let's insert a hamburger button right next to the "Person" icon in the header.
mobile_btn = '''<button id="mobile-menu-btn" class="lg:hidden p-2 text-text-primary">
<span class="material-symbols-outlined">menu</span>
</button>'''
html = html.replace('<div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">', mobile_btn + '\n<div class="hidden lg:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0">')

# And a mobile menu overlay script
mobile_script = '''
<script>
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('nav');
    if(btn && nav) {
        btn.addEventListener('click', () => {
            if(nav.classList.contains('hidden')) {
                nav.classList.remove('hidden');
                nav.classList.add('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-surface-base', 'p-6', 'shadow-lg');
            } else {
                nav.classList.add('hidden');
                nav.classList.remove('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-surface-base', 'p-6', 'shadow-lg');
            }
        });
    }
});
</script>
'''
html = html.replace('</body>', mobile_script + '\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("All links, forms, and mobile menus fixed!")
