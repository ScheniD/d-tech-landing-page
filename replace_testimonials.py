import re

html_content = """
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
        "Top Service! Freundlich, zuverlässig und professionell. Die Kommunikation war schnell und das Ergebnis hat mich überzeugt. Kann ich definitiv weiterempfehlen!"
    </p>
    <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-base flex items-center justify-center text-primary font-bold border border-border-subtle">
            MC
        </div>
        <div>
            <h4 class="font-headline-sm text-headline-sm text-text-primary text-[15px]">Melina Chaita</h4>
            <p class="font-body-sm text-body-sm text-text-muted">Kundenrezension via Google</p>
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
        "Dominik ist der Beste! Symphatisch und kompetent. Wir sind mit seiner Arbeit Mega zufrieden. Immer wieder gerne ☺️"
    </p>
    <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-base flex items-center justify-center text-secondary font-bold border border-border-subtle">
            HS
        </div>
        <div>
            <h4 class="font-headline-sm text-headline-sm text-text-primary text-[15px]">Helga S.</h4>
            <p class="font-body-sm text-body-sm text-text-muted">Kundenrezension via Google</p>
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
        "Vielen Dank für die professionelle Beratung und den Service. Dominik war bei jedem Problem nur eine Mail oder einen Anruf entfernt. Ich kann jedem empfehlen bei IT-Lösungen dieses Unternehmen zu wählen. Kompetent, schnell und preiswert."
    </p>
    <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-base flex items-center justify-center text-success-emerald font-bold border border-border-subtle">
            I
        </div>
        <div>
            <h4 class="font-headline-sm text-headline-sm text-text-primary text-[15px]">Ivana</h4>
            <p class="font-body-sm text-body-sm text-text-muted">Kundenrezension via Google</p>
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
        "Ich bin sehr zufrieden! Die Beratung war kompetent, freundlich und ausführlich. Ich wurde sehr gut beraten und meine Wünsche wurden genau umgesetzt. Die Arbeit wurde wirklich sehr gut gemacht, genau so, wie ich es mir vorgestellt habe."
    </p>
    <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-base flex items-center justify-center text-primary-fixed-dim font-bold border border-border-subtle">
            AC
        </div>
        <div>
            <h4 class="font-headline-sm text-headline-sm text-text-primary text-[15px]">Aleksandra Curcic</h4>
            <p class="font-body-sm text-body-sm text-text-muted">Kundenrezension via Google</p>
        </div>
    </div>
</div>

</div>
</section>
"""

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the entire existing testimonials section
pattern = r'<!-- TESTIMONIALS -->.*?</section>'
html = re.sub(pattern, html_content, html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
