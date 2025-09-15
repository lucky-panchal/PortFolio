@echo off
echo Committing files individually...

git add components/about/Info.jsx
git commit -m "Update Info.jsx"
echo Committed Info.jsx

git add components/contact/Contact.jsx  
git commit -m "Update Contact.jsx"
echo Committed Contact.jsx

git add components/contact/contact.css
git commit -m "Update contact.css"
echo Committed contact.css

git add components/githubstats/githubstats.css
git commit -m "Update githubstats.css"
echo Committed githubstats.css

echo All files committed individually!
pause