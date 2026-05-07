import re

original_marquee = """    <div class="brands-marquee" style="margin-bottom:0">
      <div class="brands-track">
        <span class="brand-pill">Fanuc</span>
        <span class="brand-pill">Siemens</span>
        <span class="brand-pill">Mazak</span>
        <span class="brand-pill">DMG Mori</span>
        <span class="brand-pill">Makino</span>
        <span class="brand-pill">Okuma</span>
        <span class="brand-pill">Haas</span>
        <span class="brand-pill">BFW</span>
        <span class="brand-pill">ACE Micromatic</span>
        <span class="brand-pill">Jyoti CNC</span>
        <span class="brand-pill">Yamazaki</span>
        <span class="brand-pill">Mitsui Seiki</span>
        <span class="brand-pill">Doosan</span>
        <span class="brand-pill">Hyundai WIA</span>
        <span class="brand-pill">Hartford</span>
        <span class="brand-pill">Brother</span>
        <span class="brand-pill">Kitamura</span>
        <span class="brand-pill">Matsuura</span>
        <!-- Duplicate for infinite scroll -->
        <span class="brand-pill">Fanuc</span>
        <span class="brand-pill">Siemens</span>
        <span class="brand-pill">Mazak</span>
        <span class="brand-pill">DMG Mori</span>
        <span class="brand-pill">Makino</span>
        <span class="brand-pill">Okuma</span>
        <span class="brand-pill">Haas</span>
        <span class="brand-pill">BFW</span>
        <span class="brand-pill">ACE Micromatic</span>
        <span class="brand-pill">Jyoti CNC</span>
        <span class="brand-pill">Yamazaki</span>
        <span class="brand-pill">Mitsui Seiki</span>
        <span class="brand-pill">Doosan</span>
        <span class="brand-pill">Hyundai WIA</span>
        <span class="brand-pill">Hartford</span>
        <span class="brand-pill">Brother</span>
        <span class="brand-pill">Kitamura</span>
        <span class="brand-pill">Matsuura</span>
      </div>
    </div>"""

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'    <div class="brands-marquee" style="margin-bottom:0">.*?</div>\n    </div>', original_marquee, content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Marquee restored!")
