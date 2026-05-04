@echo off
setlocal enabledelayedexpansion
echo Syncing Diablo 4 notes to GitHub...
cd /d C:\Users\perkr\quartz

git add .

:: Check if there is anything staged
git diff --cached --quiet
if %errorlevel% == 0 (
    echo Nothing to commit.
    pause
    exit /b 0
)

:: Write multi-line commit message to a temp file in the content folder
set "TMPFILE=C:\Users\perkr\quartz\content\COMMIT_MSG.txt"

echo Vault update %date% > "%TMPFILE%"
echo. >> "%TMPFILE%"

for /f "tokens=1,2 delims=	" %%a in ('git diff --cached --name-status') do (
    set "S=%%a"
    set "F=%%~nb"
    if "!S:~0,1!"=="A" echo   added: !F! >> "%TMPFILE%"
    if "!S:~0,1!"=="M" echo   modified: !F! >> "%TMPFILE%"
    if "!S:~0,1!"=="D" echo   deleted: !F! >> "%TMPFILE%"
    if "!S:~0,1!"=="R" echo   renamed: !F! >> "%TMPFILE%"
)

git commit -F "%TMPFILE%"
del "%TMPFILE%"

git push origin main

echo.
echo Done! Site will be live in ~2 minutes at:
echo https://per1970.github.io/diablo4-notes
pause
