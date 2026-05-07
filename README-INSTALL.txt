AFRIKANISCHE HILFE - DARK AFRO LOUNGE THEME UPDATE

Files included:

1. assets/images/programme-flyer.jpg
2. assets/images/gofundme-qr.png
3. assets/images/classroom-activity.jpg
4. assets/videos/community-learning-session.mp4
5. afro-lounge-homepage-section.html
6. afro-lounge-theme.css
7. projects-support-section.html
8. projects-support-styles.css

Recommended install steps in Windows CMD:

cd C:\afrikanischehilfe.de

Create folders if needed:

mkdir assets
mkdir assets\images
mkdir assets\videos

Copy the included image files into:

assets\images\

Copy the video file into:

assets\videos\

Then open your index.html.

Option A - quickest:
Paste the content of afro-lounge-homepage-section.html near the top of your homepage body, after the navigation/header.

Option B - full redesign:
Use the afro-lounge-homepage-section.html as the main homepage structure and adjust your existing content around it.

Then open your main CSS file, usually style.css or styles.css, and paste the content of afro-lounge-theme.css at the bottom.

After testing locally, push to GitHub:

git add .
git commit -m "Add dark Afro lounge theme and support section"
git push origin main

Notes:
- The hero section uses the uploaded video as a muted background.
- The QR code is used in the Support Us section.
- The flyer and classroom image are used in the activities gallery.
- Keep Impressum and Datenschutz links visible in your footer for Germany.
