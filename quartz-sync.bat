@echo off
setlocal enabledelayedexpansion
echo Syncing Diablo 4 notes to GitHub...
cd /d C:\Users\perkr\quartz

git add .

:: Build list of changed filenames (no path, no extension)
set "FILES="
for /f "delims=" %%i in ('git diff --cached --name-only') do (
    set "FILES=!FILES! %%~ni"
)

:: Fallback if nothing to commit
if "!FILES!"=="" (
    echo Nothing to commit.
    pause
    exit /b 0
)

git commit -m "Update:!FILES! (%date%)"
git push origin main

echo.
echo Done! Site will be live in ~2 minutes at:
echo https://per1970.github.io/diablo4-notes
pause