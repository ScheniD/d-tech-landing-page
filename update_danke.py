import re
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()
    
top_match = re.search(r'(.*?<header.*?</header>\s*<main[^>]*>).*?(<footer.*)', html, re.DOTALL)
top = top_match.group(1)
bottom = top_match.group(2)

inner_content = """
<div class="w-full max-w-4xl mx-auto px-6 py-32 bg-surface-raised rounded-3xl mt-12 mb-20 shadow-xl text-center">
    <div class="w-20 h-20 rounded-full bg-success-emerald/10 flex items-center justify-center text-success-emerald mx-auto mb-8">
        <span class="material-symbols-outlined text-[40px]">check_circle</span>
    </div>
    <h1 class="text-headline-xl text-text-primary mb-6">Vielen Dank für Ihre Anfrage!</h1>
    <p class="text-body-lg text-text-secondary mb-12 max-w-lg mx-auto">Ich habe Ihre Nachricht erhalten und werde mich innerhalb der nächsten 24 Stunden bei Ihnen melden.</p>
    <a href="index.html" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-container text-on-surface-container font-headline-sm text-headline-sm font-bold shadow-[0_0_32px_rgba(0,229,255,0.4)] hover:scale-[1.02] hover:bg-primary transition-all duration-300">
        <span class="material-symbols-outlined">arrow_back</span>
        Zurück zur Startseite
    </a>
</div>
"""

new_top = re.sub(r'<title>.*?</title>', '<title>Vielen Dank | D-Tech Solutions</title>', top)

# Keep the gtag event snippet for conversions!
conversion_snippet = """
    <!-- Event snippet for Anruf-Lead conversion page -->
    <script>
    gtag('event', 'conversion', {'send_to': 'AW-18397315259/s9A-CKSm--UcELuBw8RE'});
    </script>
"""
new_top = new_top.replace('</head>', conversion_snippet + '\n</head>')

with open('danke.html', 'w', encoding='utf-8') as f:
    f.write(new_top + inner_content + '</div></main>' + bottom)

print("Updated danke.html")
