with open('css/redesign.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Revert animation speed to 22s
content = content.replace('animation:marquee 80s linear infinite', 'animation:marquee 22s linear infinite')

# Remove .brand-logo-card block
import re
content = re.sub(r'/\* BRAND LOGO CARD \*/.*', '', content, flags=re.DOTALL)

with open('css/redesign.css', 'w', encoding='utf-8') as f:
    f.write(content.strip() + '\n')

print("CSS reverted!")
