import re

def html_to_jsx(html):
    # Basic replacements
    jsx = html.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('tabindex=', 'tabIndex=')
    jsx = jsx.replace('datetime=', 'dateTime=')
    jsx = jsx.replace('autocomplete=', 'autoComplete=')
    
    # Self-closing tags
    tags = ['img', 'input', 'br', 'hr', 'meta', 'link']
    for tag in tags:
        # Match <tag ... > but not <tag ... />
        pattern = re.compile(r'(<%s\b[^>]*?)(?<!/)>' % tag, re.IGNORECASE)
        jsx = pattern.sub(r'\1 />', jsx)

    # Style strings to objects - this is tricky, so we'll just remove or leave them if they are simple
    # But let's try a regex approach for inline styles if needed
    # Actually, the user has some inline styles: style="display:flex;..."
    def style_replacer(match):
        style_str = match.group(1)
        styles = {}
        for prop in style_str.split(';'):
            if ':' in prop:
                key, val = prop.split(':', 1)
                key = key.strip()
                val = val.strip()
                # Convert kebab-case to camelCase
                parts = key.split('-')
                camel_key = parts[0] + ''.join(word.capitalize() for word in parts[1:])
                styles[camel_key] = val
        
        # Format as stringified JSON object
        style_obj_str = "{" + ", ".join(f"'{k}': '{v}'" for k, v in styles.items()) + "}"
        return f"style={{{style_obj_str}}}"
        
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)

    return jsx

with open('legacy/index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Extract body content
body_match = re.search(r'<body[^>]*>(.*)</body>', html_content, re.IGNORECASE | re.DOTALL)
if body_match:
    body_content = body_match.group(1)
else:
    body_content = html_content

# Remove <script> tags for now as they cause React errors
body_content = re.sub(r'<script.*?</script>', '', body_content, flags=re.IGNORECASE | re.DOTALL)

jsx_content = html_to_jsx(body_content)

# Remove SVG fill and other attributes that React complains about
jsx_content = re.sub(r'xmlns:xlink="[^"]*"', '', jsx_content)
jsx_content = re.sub(r'xml:space="[^"]*"', '', jsx_content)
jsx_content = re.sub(r'stroke-linecap=', 'strokeLinecap=', jsx_content)
jsx_content = re.sub(r'stroke-linejoin=', 'strokeLinejoin=', jsx_content)
jsx_content = re.sub(r'stroke-width=', 'strokeWidth=', jsx_content)
jsx_content = re.sub(r'fill-rule=', 'fillRule=', jsx_content)
jsx_content = re.sub(r'clip-rule=', 'clipRule=', jsx_content)
jsx_content = re.sub(r'stroke-miterlimit=', 'strokeMiterlimit=', jsx_content)
jsx_content = re.sub(r'fill-opacity=', 'fillOpacity=', jsx_content)

page_js = f"""
import React from 'react';

export default function Home() {{
  return (
    <>
      {jsx_content}
    </>
  );
}}
"""

with open('src/app/page.js', 'w', encoding='utf-8') as f:
    f.write(page_js)

print("Conversion complete!")
