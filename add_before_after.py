import re

html_section = """
<!-- BEFORE & AFTER SECTION -->
<section class="section bg-grey">
  <div class="container">
    <div class="text-center reveal">
      <div class="label" style="justify-content:center">Proven Results</div>
      <h2>Before & After <span style="color:var(--orange)">Restoration</span></h2>
      <p style="margin-top:10px; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto;">See the dramatic difference in quality and precision. We take heavily damaged, worn-out spindles and restore them to pristine, OEM-grade conditions.</p>
    </div>
    
    <div class="content-grid align-items-center" style="margin-top: 20px;">
      <div class="col-md-6 reveal fade-left">
        <div style="background: #fff; padding: 20px; border-radius: 12px; border: 1px solid var(--border); box-shadow: var(--shadow-sm); text-align: center;">
          <h3 style="color: #dc2626; margin-bottom: 15px; font-size: 20px;">Before: Broken & Rusty</h3>
          <img src="images/spindle-before.webp" alt="Damaged CNC Spindle" style="width: 100%; border-radius: 8px; aspect-ratio: 4/3; object-fit: cover;">
          <p style="margin-top: 15px; font-size: 14px; color: var(--muted);">Severely damaged bearings, rust accumulation, and loss of precision.</p>
        </div>
      </div>
      
      <div class="col-md-6 reveal fade-right" style="margin-top: 20px; @media(min-width: 768px){margin-top: 0;}">
        <div style="background: #fff; padding: 20px; border-radius: 12px; border: 1px solid var(--border); box-shadow: var(--shadow-sm); text-align: center;">
          <h3 style="color: #16a34a; margin-bottom: 15px; font-size: 20px;">After: OEM Restored</h3>
          <img src="images/spindle-after.webp" alt="Restored CNC Spindle" style="width: 100%; border-radius: 8px; aspect-ratio: 4/3; object-fit: cover;">
          <p style="margin-top: 15px; font-size: 14px; color: var(--muted);">Fully reconditioned, dynamically balanced, and tested to perfection.</p>
        </div>
      </div>
    </div>
  </div>
</section>
"""

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before the Testimonials section
content = content.replace('<!-- TESTIMONIALS -->', html_section + '\n<!-- TESTIMONIALS -->')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Before/After section added!")
