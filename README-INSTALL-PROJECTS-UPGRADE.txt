Afrikanische Hilfe Düsseldorf — Projects & Welfare Support Upgrade

What this ZIP contains:
1. assets/images/projects/ — all new project photos
2. index.html — full updated homepage with:
   - secure FormSubmit contact form
   - new Projects / Social Support section
   - support for single mothers and widows
   - project photo gallery
   - updated donation/support wording
3. projects-impact-section.html — section-only version, if you prefer manual insertion
4. projects-impact-styles.css — CSS to append to styles.css

How to install:
1. Unzip this folder.
2. Copy everything into:
   C:\Projects\afrikanische-hilfe-duesseldorf
3. Choose "Replace files" when Windows asks.
4. Open styles.css and paste the content of projects-impact-styles.css at the very bottom.
   If you already pasted it before, do not paste it twice.
5. Push to GitHub:

   cd C:\Projects\afrikanische-hilfe-duesseldorf
   git status
   git add .
   git commit -m "Add welfare support projects and gallery"
   git pull --rebase origin main
   git push origin main

Important:
- The form uses FormSubmit. First submission may require confirming the email address:
  infoafrikahilfe@gmail.com
- No database is required.
