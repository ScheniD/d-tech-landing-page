import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

testimonials_html = """
<!-- TESTIMONIALS -->
<section class="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20" id="bewertungen">
<div class="text-center max-w-3xl mx-auto mb-16">
<span class="font-code-badge text-code-badge text-primary-container uppercase tracking-widest block mb-2">ERFAHRUNGSBERICHTE</span>
<h2 class="font-headline-xl text-headline-xl text-text-primary">Was unsere Kunden sagen</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">

<!-- Testimonial 1 -->
<div class="rounded-2xl bg-surface-raised p-8 hover:bg-surface-overlay transition-all shadow-sm flex flex-col justify-between border border-border-subtle hover:border-primary/30">
    <div class="flex items-center gap-1 text-amber-400 mb-6">
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
    </div>
    <p class="font-body-md text-body-md text-text-secondary leading-relaxed mb-8 flex-grow">
        "D-Tech Solutions hat unsere veraltete Website komplett transformiert. Die automatisierten Anfrageformulare sparen uns wöchentlich unzählige Stunden Arbeit, und wir erhalten deutlich mehr qualifizierte Leads für unsere Projekte."
    </p>
    <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-base flex items-center justify-center text-primary font-bold border border-border-subtle">
            TM
        </div>
        <div>
            <h4 class="font-headline-sm text-headline-sm text-text-primary text-[15px]">Thomas Müller</h4>
            <p class="font-body-sm text-body-sm text-text-muted">Inhaber (Handwerksbetrieb)</p>
        </div>
    </div>
</div>

<!-- Testimonial 2 -->
<div class="rounded-2xl bg-surface-raised p-8 hover:bg-surface-overlay transition-all shadow-sm flex flex-col justify-between border border-border-subtle hover:border-primary/30">
    <div class="flex items-center gap-1 text-amber-400 mb-6">
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
    </div>
    <p class="font-body-md text-body-md text-text-secondary leading-relaxed mb-8 flex-grow">
        "Als moderne Praxis war uns ein professioneller, vertrauenserweckender Auftritt extrem wichtig. Die nahtlose Integration unseres Termin-Tools funktioniert tadellos. Dominik war jederzeit erreichbar und hat alles blitzschnell umgesetzt."
    </p>
    <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-base flex items-center justify-center text-secondary font-bold border border-border-subtle">
            SB
        </div>
        <div>
            <h4 class="font-headline-sm text-headline-sm text-text-primary text-[15px]">Dr. Sarah Becker</h4>
            <p class="font-body-sm text-body-sm text-text-muted">Fachärztin</p>
        </div>
    </div>
</div>

<!-- Testimonial 3 -->
<div class="rounded-2xl bg-surface-raised p-8 hover:bg-surface-overlay transition-all shadow-sm flex flex-col justify-between border border-border-subtle hover:border-primary/30">
    <div class="flex items-center gap-1 text-amber-400 mb-6">
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
    </div>
    <p class="font-body-md text-body-md text-text-secondary leading-relaxed mb-8 flex-grow">
        "Unsere alte Seite lud extrem langsam. Seit dem Wechsel zu D-Tech sind unsere Ladezeiten unglaublich schnell, und das moderne Design wird von unseren Gästen geliebt. Absolute Empfehlung für jeden Gastronomen!"
    </p>
    <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-base flex items-center justify-center text-success-emerald font-bold border border-border-subtle">
            JK
        </div>
        <div>
            <h4 class="font-headline-sm text-headline-sm text-text-primary text-[15px]">Julian Koch</h4>
            <p class="font-body-sm text-body-sm text-text-muted">Restaurantleiter</p>
        </div>
    </div>
</div>

<!-- Testimonial 4 -->
<div class="rounded-2xl bg-surface-raised p-8 hover:bg-surface-overlay transition-all shadow-sm flex flex-col justify-between border border-border-subtle hover:border-primary/30">
    <div class="flex items-center gap-1 text-amber-400 mb-6">
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
    </div>
    <p class="font-body-md text-body-md text-text-secondary leading-relaxed mb-8 flex-grow">
        "Die Zusammenarbeit war von Tag eins an transparent und professionell. Kein Agentur-Jargon, sondern klare Ansagen und spürbare Ergebnisse. Unsere Sichtbarkeit auf Google hat sich durch das neue Setup drastisch verbessert."
    </p>
    <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-base flex items-center justify-center text-primary-fixed-dim font-bold border border-border-subtle">
            MS
        </div>
        <div>
            <h4 class="font-headline-sm text-headline-sm text-text-primary text-[15px]">Michael Schmidt</h4>
            <p class="font-body-sm text-body-sm text-text-muted">Geschäftsführer</p>
        </div>
    </div>
</div>

</div>
</section>
"""

# Insert right before the "6. FOUNDER" section
target = '<!-- 6. FOUNDER'
if target in html:
    html = html.replace(target, testimonials_html + '\n' + target)
else:
    print("Could not find the target location for testimonials.")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Testimonials section added successfully!")
