@echo off
cd /d "%~dp0"
for /f "tokens=1-4 delims=/: " %%a in ("%date% %time%") do (
  set datestr=%%a-%%b-%%c %%d
)
git add .
git commit -m "%datestr%"
git push origin main