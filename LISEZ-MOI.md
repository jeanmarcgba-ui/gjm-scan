# GJM Scan — Guide de mise en service

Application installable (PWA) : QR Code, Code-barre, Scanner, Option — conforme au menu demandé.

## ⚠️ Important : ne pas ouvrir le fichier en double-cliquant

Si vous ouvrez `index.html` en double-cliquant dessus, l'adresse dans Chrome commence par `file://` (ou affiche juste le chemin, ex. `D:/TELECHARGEMENTS/gjm-scan/index.html`). **Sur cette adresse, aucun navigateur ne propose l'installation** — c'est une limite volontaire des navigateurs, pas un problème de l'application. La caméra (pour le scanner) est aussi bloquée dans ce mode.

Il faut que le dossier soit servi via une adresse commençant par `http://` ou `https://`. Trois façons d'y arriver, de la plus simple à la plus technique :

### Option 1 — La plus simple : Netlify Drop (gratuit, aucune installation, 2 minutes)
1. Allez sur **https://app.netlify.com/drop** dans votre navigateur.
2. Glissez-déposez tout le dossier `gjm-scan` sur la page.
3. Netlify vous donne un lien internet (ex. `https://gjm-scan-xxxx.netlify.app`).
4. Ouvrez ce lien — l'icône d'installation apparaît normalement dans la barre d'adresse et dans l'application.

C'est la meilleure option pour un usage quotidien : le lien reste actif, accessible depuis n'importe quel appareil, et l'installation fonctionne partout.

### Option 2 — Test local rapide sur Windows (si Python est installé)
Double-cliquez sur le fichier **`DEMARRER-WINDOWS.bat`** fourni dans ce dossier : il ouvre automatiquement l'application dans votre navigateur via `http://localhost:8080`. Gardez la fenêtre noire ouverte tant que vous utilisez l'app.

*(Si rien ne se passe, c'est que Python n'est pas installé sur cet ordinateur — utilisez l'Option 1 à la place.)*

### Option 3 — Hébergement définitif chez GJM Technologie
Copiez tout le dossier tel quel (structure conservée) à la racine de votre hébergement web ou dans un sous-dossier, via FTP ou votre panneau d'hébergement habituel.

## 2. Installer l'application sur un appareil

- **Ordinateur (Chrome/Edge)** : ouvrez le site, cliquez sur l'icône d'installation dans la barre d'adresse, ou allez dans Option → *Installer l'application*.
- **Android** : menu du navigateur → *Ajouter à l'écran d'accueil* / *Installer l'application*.
- **iPhone/iPad (Safari)** : bouton Partager → *Sur l'écran d'accueil*.

Le logo GJM Technologie fournit apparaît sur l'icône, l'écran de connexion et l'en-tête de l'application.

## 3. Ce qui est fonctionnel

- **QR CODE / CODE BARRE** : 7 types (Texte, Lien, Document, Galerie d'images, Réseau social, Vidéo, WiFi), aperçu, téléchargement de l'image, liste des codes générés par nom.
- **SCANNER** : capture de document par caméra avec enregistrement en PDF, Word, Excel, Image ou Dessin ; lecture de QR Code et de codes-barres avec ouverture automatique du contenu (lien, texte, wifi, fichier).
- **OPTION → Sécurité** : protection de l'app par nom d'utilisateur / mot de passe.
- **OPTION → Sauvegarde** : export/restauration complète des données au format JSON.

## 4. Une limite technique importante à connaître

Un QR Code ne peut physiquement contenir qu'**environ 2 Ko** de données (un code-barre encore moins). Un vrai fichier (photo, document, vidéo) pèse presque toujours plus lourd.

- Si le fichier choisi est très petit (quelques lignes de texte, une icône), il est encodé **directement dans le QR Code** : il est alors lisible par n'importe quel appareil, comme demandé.
- Si le fichier est plus lourd (cas fréquent pour un document, une galerie ou une vidéo), le fichier est conservé **dans l'application, sur l'appareil**, et le QR Code encode une référence interne. En cliquant sur le nom du code dans la liste, ou en le scannant **depuis ce même appareil**, l'application rouvre le fichier via ce chemin, exactement comme demandé. En revanche, un tel code scanné depuis un autre téléphone ou une appli de scan externe ne pourra pas retrouver le fichier, puisqu'aucun serveur ne l'héberge.
- Pour un QR Code de document/galerie/vidéo lisible par **n'importe quel appareil**, la seule solution est d'héberger le fichier en ligne (site, Drive, etc.) et de générer un QR de type **Lien** vers cette adresse.

L'application vous avertit directement dans l'écran de résultat quand un code est de type « usage interne » pour cette raison.
