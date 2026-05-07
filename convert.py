import os
import re

# Read index.html to extract head, nav, footer, scripts
with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# Extract from <!DOCTYPE html> to </nav>
header_match = re.search(r'(<!DOCTYPE html>.*?</nav>)', index_html, re.DOTALL)
new_header = header_match.group(1) if header_match else ""

# Extract from <!-- FOOTER --> to </html>
footer_match = re.search(r'(<!-- FOOTER -->.*</html>)', index_html, re.DOTALL)
new_footer = footer_match.group(1) if footer_match else ""

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

    # Find where the page header starts
    # Usually <section class="page-header
    parts = re.split(r'<section class="page-header', content, maxsplit=1)
    if len(parts) < 2:
        continue
    
    # Extract the page title
    title_match = re.search(r'<h1><span>(.*?)</span></h1>', parts[1])
    page_title = title_match.group(1) if title_match else "Page"

    # Find where the footer starts
    footer_parts = re.split(r'<footer class="footer-section">', parts[1], maxsplit=1)
    if len(footer_parts) < 2:
        footer_parts = re.split(r'<!--/.blog-section-->', parts[1], maxsplit=1)
    if len(footer_parts) < 2:
        footer_parts = re.split(r'<footer', parts[1], maxsplit=1)
        
    main_content = footer_parts[0]
    
    # We will wrap main_content in <section class="inner-content"><div class="container">...</div></section>
    # Wait, the main_content already has <section> tags. Let's just keep it as is, but we need to remove the old bootstrap containers if we want, or just leave it since redesign.css resets some things.
    # Actually, we should replace <div class="col-lg-7"> with <div class="content-main"> and <div class="col-lg-5"> with <div class="content-sidebar">
    main_content = main_content.replace('col-lg-7', 'content-main')
    main_content = main_content.replace('col-lg-8', 'content-main')
    main_content = main_content.replace('col-lg-5', 'content-sidebar')
    main_content = main_content.replace('col-lg-4', 'content-sidebar')
    main_content = main_content.replace('row', 'content-grid')
    
    # Clean up some old tags
    main_content = re.sub(r'<div class="new61">.*?<h2.*?>', '<h2>', main_content, flags=re.DOTALL)
    main_content = main_content.replace('</h2><br></div>', '</h2>')
    main_content = main_content.replace('</h2></div>', '</h2>')
    main_content = re.sub(r'<div class="new-9">(.*?)</div>', r'<h3>\1</h3>', main_content)
    
    # Customize the header for the page title in the <head>
    page_header = new_header.replace('<title>CNC VMC HMC Spindle Repair & Reconditioning | GPS Spindles Pune</title>', f'<title>{page_title} | GPS Spindles Pune</title>')
    # Make sure we don't mess up canonical
    page_header = re.sub(r'<link rel="canonical" href=".*?">', f'<link rel="canonical" href="https://www.gpsspindles.net/{page}">', page_header)
    
    # Reconstruct page
    new_page = f"""{page_header}

<section class="page-header">
  <div class="container">
    <h1>{page_title}</h1>
    <div class="breadcrumb"><a href="index.html">Home</a> / {page_title}</div>
  </div>
</section>

<section class="inner-content">
  <div class="container">
    {main_content}
  </div>
</section>

{new_footer}
"""
    with open(page, 'w', encoding='utf-8') as f:
        f.write(new_page)

print("Conversion complete.")
