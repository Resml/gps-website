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

    # Find the inner-content section
    inner_match = re.search(r'(<section class="inner-content">.*?</section>)', content, re.DOTALL)
    if inner_match:
        inner_content = inner_match.group(1)
        # Remove old breadcrumb/title that looks like:
        # <h1><span>About Us</span></h1>
        # <div class="new58"><a href="index.html">Home </a>/ <a href="about-gps.html">About Us</a></div>
        inner_content = re.sub(r'<h1>.*?</h1>', '', inner_content, count=1, flags=re.DOTALL)
        inner_content = re.sub(r'<div class="new58">.*?</div>', '', inner_content, count=1, flags=re.DOTALL)
        
        # Replace back into content
        content = content[:inner_match.start()] + inner_content + content[inner_match.end():]
        
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fix2 complete.")
