import re
import glob

# Get all client images
images = glob.glob('images/clients/*.*')
images.sort() # Sort them to have a stable order

# Generate the HTML for the marquee
track_content = ""
for img in images:
    if "client" in img:
        track_content += f'        <div class="brand-logo-card"><img src="{img}" alt="Brand Logo"></div>\n'

# Read index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the current marquee
new_marquee = f"""    <div class="brands-marquee" style="margin-bottom:0">
      <div class="brands-track">
{track_content}
        <!-- Duplicate for infinite scroll -->
{track_content}      </div>
    </div>"""

# Find the old marquee and replace it
# The old marquee is:
#     <div class="brands-marquee" style="margin-bottom:0">
#       <div class="brands-track">
#         <span class="brand-pill">Fanuc</span>
# ...
#       </div>
#     </div>

content = re.sub(r'    <div class="brands-marquee" style="margin-bottom:0">.*?</div>\n    </div>', new_marquee, content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("index.html updated with image marquee!")
