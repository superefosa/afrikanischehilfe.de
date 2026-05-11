Afrikanische Hilfe Düsseldorf — Multi-page German/English upgrade

What is included:
- index.html converted to a true landing/home page with page-link navigation.
- about.html and contact.html added so the tabs open real pages.
- programmes.html, events.html, projects.html, support.html, volunteer.html, impressum.html and datenschutz.html normalized.
- Navigation no longer uses #about, #projects, #support, etc.
- German/English language system preserved and improved for placeholders/dropdowns.
- Contact and FormSubmit email updated to: infoafrikahilfe@gmail.com
- Projects page upgraded with social support blocks for single mothers, widows, children and families.

Install in CMD:
cd C:\Projectsfrikanische-hilfe-duesseldorf

Then unzip/copy all files from this package into that folder and choose Replace files.

Check:
findstr /s /i "href="#" *.html
findstr /s /i "info.afrikahilfe@gmail.com" *.*

Both should return nothing except intentional non-navigation anchors, if any.

Push:
git status
git add .
git commit -m "Convert site to multi page bilingual structure"
git pull --rebase origin main
git push origin main

Important:
Your existing assets/images and assets/videos folders should remain in your project. This ZIP references those image/video paths but does not replace your media library.
