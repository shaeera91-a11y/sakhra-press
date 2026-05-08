import os
import glob

directory = r"d:\ALL WORKIN AM\A M  printing  graphic design\web AM\web sakhra"
html_files = glob.glob(os.path.join(directory, "*.html"))

target1 = '<div class="logo" style="font-size: 24px; font-weight: bold; color: var(--accent);">[LOGO] SAKHRA</div>'
target1_alt = '    <div class="logo" style="font-size: 24px; font-weight: bold; color: var(--accent);">[LOGO] SAKHRA</div>'
replace1 = '    <a href="index.html" class="logo"><img src="logo.png" alt="Sakhra Modern Press" style="height: 50px;"></a>'

target2 = '<div style="font-size: 24px; font-weight: bold; color: var(--accent); margin-bottom: 5px;">[LOGO] SAKHRA</div>'
target2_alt = '    <div style="font-size: 24px; font-weight: bold; color: var(--accent); margin-bottom: 5px;">[LOGO] SAKHRA</div>'
replace2 = '    <img src="logo.png" alt="Sakhra Modern Press" style="height: 60px; margin-bottom: 5px;">'

for file_path in html_files:
    if os.path.basename(file_path) == "index.html":
        continue # Already processed
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Apply replacement
    content = content.replace(target1, replace1.strip())
    content = content.replace(target1_alt, replace1)
    content = content.replace(target2, replace2.strip())
    content = content.replace(target2_alt, replace2)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print(f"Processed {len(html_files)} HTML files for logo replacements.")
