import re

with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

header_match = re.search(r'(<!DOCTYPE html>.*?</nav>)', index_html, re.DOTALL)
new_header = header_match.group(1)

footer_match = re.search(r'(<!-- FOOTER -->.*</html>)', index_html, re.DOTALL)
new_footer = footer_match.group(1) if footer_match else ""
if not new_footer:
    footer_match = re.search(r'(<footer class="footer-section">.*</html>)', index_html, re.DOTALL)
    new_footer = footer_match.group(1)

for page, title in [('gps-contact.html', 'Contact Us'), ('enquiry.php.html', 'Enquiry')]:
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract main content
    content_match = re.search(r'(<section class="contact-section.*?</section>)', content, re.DOTALL)
    if not content_match:
        print(f"Could not find main content in {page}")
        continue
    
    main_content = content_match.group(1)
    
    # Clean up main_content
    main_content = main_content.replace('col-lg-6 sm-padding', 'content-main')
    main_content = main_content.replace('row', 'content-grid')
    main_content = re.sub(r'<div class="new61">.*?<h2.*?>', '<h2>', main_content, flags=re.DOTALL)
    main_content = main_content.replace('</h2><br></div>', '</h2>')
    
    # Customize header
    page_header = new_header.replace('<title>CNC VMC HMC Spindle Repair & Reconditioning | GPS Spindles Pune</title>', f'<title>{title} | GPS Spindles Pune</title>')
    page_header = re.sub(r'<link rel="canonical" href=".*?">', f'<link rel="canonical" href="https://www.gpsspindles.net/{page}">', page_header)
    
    # Write page
    new_page = f"""{page_header}

<section class="page-header">
  <div class="container">
    <h1>{title}</h1>
    <div class="breadcrumb"><a href="index.html">Home</a> / {title}</div>
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

print("Contact pages fixed.")
