# EarnPro Setup Guide

## 1. Firebase Setup
1. Go to https://console.firebase.google.com
2. Create new project
3. Enable **Authentication** → Email/Password
4. Enable **Firestore Database** → Start in test mode
5. Copy your config from Project Settings → Your apps → Web app

## 2. Update firebase.js
Replace the config values in `firebase.js`:
```js
const firebaseConfig = {
  apiKey: "YOUR_REAL_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  ...
};
```

## 3. Apply Firestore Rules
In Firebase Console → Firestore → Rules, paste the contents of `firestore.rules`

## 4. Create Admin User
1. Register normally at `register.html`
2. Go to Firebase Console → Firestore → users collection
3. Find your user document
4. Add field: `role` = `"admin"` (string)
5. Now login at `admin/login.html`

## 5. File Structure
```
/index.html          → Auto-redirect
/login.html          → User login
/register.html       → User signup
/home.html           → Dashboard
/earn.html           → Earn tasks
/wallet.html         → Withdraw
/profile.html        → User profile
/leaderboard.html    → Rankings
/admin/login.html    → Admin login
/admin/index.html    → Admin dashboard
/style.css           → All styles
/firebase.js         → Firebase config
/app.js              → Shared utilities
/firestore.rules     → Security rules
```

## 6. Upload to HopWeb / Any Static Host
Upload all files maintaining the folder structure. No build tools needed.
