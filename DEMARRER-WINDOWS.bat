@echo off
title GJM Scan - demarrage local
cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel%==0 (
    echo Demarrage du serveur local...
    start "" http://localhost:8080/index.html
    python -m http.server 8080
    goto :eof
)

where py >nul 2>nul
if %errorlevel%==0 (
    echo Demarrage du serveur local...
    start "" http://localhost:8080/index.html
    py -m http.server 8080
    goto :eof
)

echo.
echo Python n'est pas installe sur cet ordinateur, il est necessaire
echo pour lancer GJM Scan en local avec l'icone d'installation.
echo.
echo SOLUTION LA PLUS SIMPLE (gratuite, sans rien installer) :
echo   1. Allez sur https://app.netlify.com/drop dans votre navigateur
echo   2. Glissez-deposez tout le dossier "gjm-scan" sur la page
echo   3. Netlify vous donne un lien internet - ouvrez-le
echo   4. L'icone d'installation apparait normalement
echo.
pause
