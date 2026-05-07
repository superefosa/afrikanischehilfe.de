AFRIKANISCHE HILFE - CLEAN LANDING HERO UPDATE

Goal:
Show the programme image first on the landing/home page, without text/writing overlay.

Files included:
- assets/images/landing-hero-clean.jpg
- assets/images/landing-hero-clean-wide.jpg
- HOME-HERO-REPLACEMENT.html
- CSS-ADD-TO-STYLES.css

How to install:
1. Copy the assets folder into:
   C:\Projects\afrikanische-hilfe-duesseldorf

2. Open index.html.

3. Find the first hero section. It usually starts like:
   <section class="hero">

4. Replace that full hero section, from:
   <section class="hero">
   down to its closing:
   </section>

   with the content from HOME-HERO-REPLACEMENT.html

5. Open styles.css and paste the content from CSS-ADD-TO-STYLES.css at the bottom.

6. Push to GitHub:
   git status
   git add .
   git commit -m "Add clean image-first landing hero"
   git pull --rebase origin main
   git push origin main

Note:
This update does not delete old versions. Git keeps old versions in commit history.
