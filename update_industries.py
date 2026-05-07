import re

with open('css/redesign.css', 'r', encoding='utf-8') as f:
    css = f.read()

new_css = """
/* INDUSTRIES */
.industries-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:50px}
.industry-card{background:#fff;border:1px solid var(--border);border-radius:14px;overflow:hidden;text-align:center;transition:all 0.3s;cursor:default; display:flex; flex-direction:column;}
.industry-card:hover{border-color:var(--orange);transform:translateY(-4px);box-shadow:var(--shadow-md)}
.industry-card-img{width:100%;height:140px;object-fit:cover;border-bottom:1px solid var(--border);}
.industry-card-content{padding:20px 16px;}
.industry-card svg{width:28px;height:28px;color:var(--orange);margin:0 auto 10px}
.industry-card h4{font-size:15px;font-weight:700;color:var(--text);margin:0;}
@media (max-width: 991px) {
  .industries-grid{grid-template-columns:repeat(2,1fr);}
}
@media (max-width: 576px) {
  .industries-grid{grid-template-columns:1fr;}
}
"""

css = re.sub(r'/\* INDUSTRIES \*/.*?/\* TESTIMONIALS \*/', new_css + '\n/* TESTIMONIALS */', css, flags=re.DOTALL)

with open('css/redesign.css', 'w', encoding='utf-8') as f:
    f.write(css)

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the industries-grid content
new_html_grid = """    <div class="industries-grid">
      <div class="industry-card reveal">
        <img src="images/vmc-spindles-2.jpg" alt="Automotive" class="industry-card-img">
        <div class="industry-card-content">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
          <h4>Automotive</h4>
        </div>
      </div>
      <div class="industry-card reveal delay-1">
        <img src="images/milling-heads-repairing-and-services-2.jpg" alt="Aerospace" class="industry-card-img">
        <div class="industry-card-content">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          <h4>Aerospace</h4>
        </div>
      </div>
      <div class="industry-card reveal delay-2">
        <img src="images/high-frequency-spindles.jpg" alt="Defence" class="industry-card-img">
        <div class="industry-card-content">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          <h4>Defence</h4>
        </div>
      </div>
      <div class="industry-card reveal delay-3">
        <img src="images/testing-room.jpg" alt="Medical Devices" class="industry-card-img">
        <div class="industry-card-content">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          <h4>Medical Devices</h4>
        </div>
      </div>
      <div class="industry-card reveal">
        <img src="images/spindle-room-2.jpg" alt="Heavy Engineering" class="industry-card-img">
        <div class="industry-card-content">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          <h4>Heavy Engineering</h4>
        </div>
      </div>
      <div class="industry-card reveal delay-1">
        <img src="images/grinding-spindles-2.jpg" alt="Mould & Die" class="industry-card-img">
        <div class="industry-card-content">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
          <h4>Mould & Die</h4>
        </div>
      </div>
      <div class="industry-card reveal delay-2">
        <img src="images/cnc-spindle-repair.jpg" alt="Pharma" class="industry-card-img">
        <div class="industry-card-content">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
          <h4>Pharma</h4>
        </div>
      </div>
      <div class="industry-card reveal delay-3">
        <img src="images/manufacturing-of-customized-spindles-2.jpg" alt="Electronics" class="industry-card-img">
        <div class="industry-card-content">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          <h4>Electronics</h4>
        </div>
      </div>
    </div>"""

html = re.sub(r'    <div class="industries-grid">.*?</div>\n  </div>\n</section>', new_html_grid + '\n  </div>\n</section>', html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Industries updated!")
