@echo off
echo ================================
echo  Diablo 4 Notes - Quartz Sync
echo ================================
echo.

set VAULT=C:\Users\perkr\OneDrive\Documents\Obsidian\Games\Diablo 4
set CONTENT=C:\Users\perkr\quartz\content

echo Copying notes from Obsidian vault to Quartz...
robocopy "%VAULT%" "%CONTENT%" *.md /E /XD Templates .obsidian /XF *.canvas quartz-sync.bat
echo.

echo Pushing to GitHub...
cd /d C:\Users\perkr\quartz
git add .
git commit -m "Update notes %date%"
git push origin main
echo.

echo ================================
echo Done! Live in ~2 mins at:
echo https://per1970.github.io/diablo4-notes
echo ================================
pause
