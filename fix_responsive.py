import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Fix Hero Title
html = html.replace('font-display-hero text-display-hero', 'font-display-hero text-display-hero-mobile md:text-display-hero')

# Fix Section Titles (headline-xl)
html = html.replace('font-headline-xl text-headline-xl', 'font-headline-xl text-headline-xl-mobile md:text-headline-xl')

# Fix Testimonials / Bento Grid padding for small phones
html = html.replace('p-8 hover:bg-surface-overlay', 'p-6 sm:p-8 hover:bg-surface-overlay')
html = html.replace('p-8 sm:p-10', 'p-6 sm:p-10')
html = html.replace('p-8 sm:p-12', 'p-6 sm:p-12')
html = html.replace('p-8 sm:p-14', 'p-6 sm:p-14')

# Ensure header layout on very small screens doesn't break
# <div class="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
html = html.replace('justify-between gap-6', 'justify-between gap-2 sm:gap-6')

# Check contact form button text size on mobile
html = html.replace('text-headline-sm font-bold', 'text-label-md sm:text-headline-sm font-bold')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Mobile responsiveness improved!")
