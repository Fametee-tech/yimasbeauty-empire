YIMAS BEAUTY EMPIRE WEBSITE UPGRADE — GITHUB PAGES

This is a static website package intended to replace the files in your existing GitHub Pages repository after you have backed up the current site.

FILES
- index.html: page content, sections, service list, booking form and links
- style.css: visual design, colours, responsive layout and mobile styling
- script.js: mobile menu and WhatsApp booking-message behavior
- assets/: logo, current price-list image and the two supplied hairstyle photos. The gallery is visual only; appointment booking is the sole customer action.

IMPORTANT BEFORE UPLOADING
1. Keep your downloaded backup ZIP somewhere safe.
2. This website does not have a paid server or database. Appointment details are not stored by the website. The form opens WhatsApp with a prepared message; the customer must press Send and your team must reply to confirm the appointment.
3. Confirm your Instagram/Facebook profile URLs and price list are current. Social profile links may need adjustment if the handles use different URLs.
4. Do not add bank account details, passwords, API keys, or private customer information to this public repository.

HOW TO PUBLISH TO YOUR EXISTING REPOSITORY
1. Open https://github.com/Fametee-tech/yimasbeauty-empire
2. Download a fresh ZIP of the current repository as a backup.
3. On your computer, extract this upgrade ZIP. Open the folder named yimasbeauty-empire-upgrade.
4. In GitHub, open the repository and use Add file > Upload files. Upload index.html, style.css, script.js and the entire assets folder contents so the paths remain assets/filename.jpeg. If GitHub's web uploader is awkward for replacing a folder, use GitHub Desktop or your existing local Git workflow instead.
5. Commit changes to the same branch currently used by GitHub Pages (usually main). GitHub may ask you to confirm replacing files; that is expected only after your backup is secured.
6. Open the live website and test on a phone and computer. Test the booking form with a future date and confirm the generated WhatsApp message is correct before relying on it.

EASIER BEGINNER METHOD
The safest method for replacing multiple files is GitHub Desktop:
- Install GitHub Desktop from https://desktop.github.com/ and sign in.
- Clone your existing yimasbeauty-empire repository to your computer.
- Copy these package files into the cloned repository, replacing same-named files and merging the assets folder.
- Commit with a message such as "Upgrade Yimasbeauty website design" and click Push origin.
- Wait for GitHub Pages to publish, then reload the live site.

BOOKING DETAILS
WhatsApp destination: +2347038724293
Opening hours displayed: Monday–Saturday, 10am–7pm
Booking policy displayed: 50% deposit; cancellations at least 48 hours ahead; rescheduling at least 24 hours ahead; appointment confirmation by WhatsApp.
