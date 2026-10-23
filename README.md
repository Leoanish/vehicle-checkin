# 🚚 Vehicle Check-In & Return Web App

A clean, standalone, mobile-first webpage designed to be scanned via QR code and filled out immediately by drivers on their phones. No external databases or Google Sheets required—it works completely out of the box.

---

## 📱 Features

- **Mobile First & Responsive**: Clean UI designed specifically for single-hand mobile use.
- **Vehicle Selection**: Big tap buttons for **Old Van** and **New Truck**.
- **Driver Details & Odometer**: Quick inputs for Driver's Name and Ending Mileage.
- **U-Haul Style Fuel Gauge**:
  - Color gradient meter (`Empty` red $\to$ `Full` green).
  - Smooth slider with fractional steps (`E`, `1/4`, `1/2`, `3/4`, `F`).
- **Return Checklist**:
  - Doors & windows closed
  - Truck locked & secured
  - Electronics & devices removed
  - Messes cleaned & trash disposed
- **Built-in History Tab**: Drivers and fleet managers can tap the "History" tab directly on the page to view past check-ins logged on the device.
- **Instant QR Code & Print Poster**: Tap **Show QR** on the top header to see the QR code or print a ready-made sign to tape onto the vehicle's dashboard.

---

## 🌐 Quick Deployment (GitHub Pages)

1. Create a repository on your GitHub (e.g., `vehicle-checkin`).
2. Push this folder to GitHub:
   ```bash
   git add .
   git commit -m "Vehicle check-in standalone web app"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
3. Enable free hosting in **Settings** $\to$ **Pages** $\to$ select `main` branch $\to$ **Save**.
4. Drivers can scan the QR code and use the webpage immediately!
