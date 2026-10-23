# 🚛 Vehicle Return & End-of-Trip Checklist Web App

A modern, responsive, mobile-optimized checklist webpage for vehicle returns with built-in **U-Haul style fuel gauge**, odometer mileage logging, safety reminders, and dynamic **QR Code generation**.

---

## 📱 Features

1. **Vehicle Selector**: Quick single-tap switch between **Old Van** and **New Truck**.
2. **Trip & Driver Details**: Driver's full name and numerical ending odometer mileage input.
3. **U-Haul Style Fuel Gauge**:
   - Visual gradient meter (Red $\to$ Yellow $\to$ Green)
   - Interactive slider from **Empty (E)** to **Full (F)** with fractional markers (`E`, `1/4`, `1/2`, `3/4`, `F`).
4. **Mandatory Checklist**:
   - [x] All doors & windows are closed
   - [x] Truck / Van is locked & keys secured
   - [x] Electronics & GPS / devices removed
   - [x] Cleaned your messes & disposed of trash
5. **QR Code Generator Modal & Printable Sign**:
   - Tap the **"Scan QR"** button on the top right to view and print out a QR code poster that can be placed on the vehicle dashboard, visor, or key box.
6. **Google Sheets Sync**:
   - Comes with a ready-to-use Google Apps Script to automatically capture all submissions directly into your Google Sheet.

---

## 🔗 Connect to Google Sheets (2 Minutes Setup)

1. Open a new or existing **Google Sheet** on [sheets.google.com](https://sheets.google.com).
2. Click **Extensions** $\to$ **Apps Script**.
3. Replace any code in the editor with the contents of [`google-apps-script.js`](./google-apps-script.js).
4. Click **Deploy** $\to$ **New deployment**.
5. Select **Web app**:
   - **Execute as**: *Me*
   - **Who has access**: *Anyone* (Important so drivers don't need to log in to Google).
6. Click **Deploy** and copy the **Web app URL**.
7. In [`index.html`](./index.html), find line 506:
   ```javascript
   const GOOGLE_SCRIPT_WEBHOOK_URL = "";
   ```
   Paste your copied URL between the quotes:
   ```javascript
   const GOOGLE_SCRIPT_WEBHOOK_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
   ```

---

## 🌐 Free Instant Hosting with GitHub Pages

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "Initial commit for vehicle checklist web app"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/vehicle-checkin.git
   git push -u origin main
   ```
2. In your GitHub repo, go to **Settings** $\to$ **Pages**.
3. Under **Branch**, select `main` and `/ (root)` folder, then click **Save**.
4. GitHub Pages will provide a live URL (e.g. `https://<YOUR-USERNAME>.github.io/vehicle-checkin`).
5. Open that link on your phone or computer, tap **Scan QR**, print the sign, and stick it in your vehicles!
