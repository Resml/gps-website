import os
import re

pages = [
    'about-gps.html',
    'gps-contact.html',
    'vmc-hmc-and-cnc-spindles-reconditioning-repairing-services.html',
    'high-frequency-speed-precision-grinding-spindles-repairing-services.html',
    'customized-spindles-manufacturer.html',
    'spindle-accessories-spare-parts-manufacturer.html',
    'milling-heads-reconditioning-repairing-restoration-services.html',
    'brands-we-repair.html',
    'industries-we-serve.html',
    'news-letters.html',
    'privacy-policy.html',
    'spindles-repairing-rebuilding-reconditioning-restoration-testing-services.html',
    'location-we-serve.html',
    'enquiry.php.html'
]

for page in pages:
    if not os.path.exists(page):
        continue
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix the `content-grid` issue
    # We want to change it back to `row` if it is NOT part of `class="content-grid"`
    content = re.sub(r'(?<!class=")content-grid', 'row', content)
    
    # Fix the leftover page-header markup
    # It looks like:
    # <div class="container">
    #      bd-bottom">
    #         <div class="page-header-bg"></div>
    # ...
    #     </section>
    #     <!--/.slider-section-->
    
    # Let's remove from `bd-bottom">` up to `<!--/.slider-section-->`
    content = re.sub(r'\s*bd-bottom">.*?<!--/\.slider-section-->', '', content, flags=re.DOTALL|re.IGNORECASE)
    
    # Sometimes it doesn't have slider-section comment, let's just match the h1 block
    content = re.sub(r'\s*bd-bottom">.*?</section>', '', content, flags=re.DOTALL)
    
    # Also clean up empty <br> tags at the start of inner-content
    content = re.sub(r'<div class="container">\s*(<br>\s*)+', '<div class="container">\n', content)
    
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fix complete.")
