import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove the DE/EN toggle
# The toggle looks like this:
# <div class="inline-flex items-center rounded-full p-1 bg-surface-raised"><a class="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-overlay text-text-primary" href="#">DE</a><a class="font-label-sm text-label-sm px-2.5 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-colors" href="#">EN</a></div>
toggle_pattern = r'<div class="inline-flex items-center rounded-full p-1 bg-surface-raised">.*?</div>'
html = re.sub(toggle_pattern, '', html)

# Remove the person icon
# <div class="hidden lg:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0"><span class="material-symbols-outlined text-on-primary text-[18px]">person</span></div>
person_icon_pattern = r'<div class="hidden lg:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0"><span class="material-symbols-outlined text-on-primary text-\[18px\]">person</span></div>'
html = re.sub(person_icon_pattern, '', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Header cleaned up!")
