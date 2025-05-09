Workout Tracker

A mobile-friendly workout tracker for men with L4/L5 disc herniations, featuring strength, HIIT, plyometrics, and mobility exercises. Includes YouTube video demos, logs workouts, tracks history, shows progress charts, and sends notifications.

Setup





Install Node.js (v16+): nodejs.org.



Clone or download this repository.



Run npm install to install dependencies.



Build CSS: npm run build.



Copy src/index.html and src/script.js to dist/:

cp src/index.html dist/
cp src/script.js dist/



Open dist/index.html in a browser or deploy.

Development





Run npm run watch to auto-rebuild CSS during development.



Edit src/index.html or src/script.js for changes.

Deployment





Create a public GitHub repository (e.g., workout-tracker).



Push dist/ contents:

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/workout-tracker.git
git branch -M main
git push -u origin main



Enable GitHub Pages in Settings > Pages, selecting main branch and /dist folder.



Access at https://<your-username>.github.io/workout-tracker/.

Notes





Workout history is stored in localStorage and persists unless browser data is cleared.



Notifications require browser permission and work best when the app is open.



YouTube videos demonstrate safe form; stop exercises if back pain occurs and consult a physiotherapist.
