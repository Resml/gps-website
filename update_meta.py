import os
import re

page_metas = {
    'about-gps.html': 'Learn about General Precision Spindles, Pune\'s leading experts in CNC, VMC, and HMC spindle repair, reconditioning, and customized manufacturing since 2017.',
    'gps-contact.html': 'Contact GPS Spindles in Pune for urgent spindle repair, rebuilding, or manufacturing inquiries. Call Sachin Kuchekar (+91 8484898144) or Anil Vakude.',
    'enquiry.php.html': 'Submit your requirements for spindle repair, manufacturing, or accessories. GPS Spindles offers comprehensive solutions for your industrial machining needs.',
    'vmc-hmc-and-cnc-spindles-reconditioning-repairing-services.html': 'Professional reconditioning and repair services for VMC, HMC, and CNC spindles. Restore your spindles to OEM specifications with our expert technicians.',
    'high-frequency-speed-precision-grinding-spindles-repairing-services.html': 'Expert repairing services for high-frequency and precision grinding spindles. Reduce downtime and maximize performance with GPS Spindles.',
    'customized-spindles-manufacturer.html': 'We manufacture high-quality, customized spindles tailored to your specific industrial requirements. Contact GPS Spindles for bespoke engineering solutions.',
    'spindle-accessories-spare-parts-manufacturer.html': 'Manufacturer and supplier of premium spindle accessories and spare parts including collets, drawbars, seal rings, and bearings in Pune, India.',
    'milling-heads-reconditioning-repairing-restoration-services.html': 'Comprehensive milling heads repairing, reconditioning, and restoration services to ensure optimal precision and longevity for your machining centers.',
    'brands-we-repair.html': 'We repair and recondition spindles from top global brands including DMG Mori, Haas, Makino, Mazak, Doosan, and many more. View our supported brands.',
    'industries-we-serve.html': 'GPS Spindles serves diverse industries including Automotive, Aerospace, Medical, and Heavy Engineering with top-tier spindle repair and manufacturing.',
    'news-letters.html': 'Read our latest newsletters for updates, insights, and technological advancements in spindle manufacturing and reconditioning at GPS Spindles.',
    'privacy-policy.html': 'Read the privacy policy of General Precision Spindles to understand how we collect, use, and protect your personal information on our website.',
    'spindles-repairing-rebuilding-reconditioning-restoration-testing-services.html': 'End-to-end spindle services: Repairing, rebuilding, reconditioning, restoration, and rigorous testing to ensure your spindles perform like new.',
    'location-we-serve.html': 'GPS Spindles provides expert spindle repair and manufacturing services across India, serving major industrial hubs from Pune, Maharashtra.'
}

for page, desc in page_metas.items():
    if not os.path.exists(page):
        continue
    
    with open(page, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the existing description (which is currently the default one)
    # <meta name="description" content="...">
    content = re.sub(
        r'<meta name="description" content="[^"]*">',
        f'<meta name="description" content="{desc}">',
        content
    )
    
    with open(page, 'w', encoding='utf-8') as f:
        f.write(content)

print("Meta descriptions updated successfully.")
