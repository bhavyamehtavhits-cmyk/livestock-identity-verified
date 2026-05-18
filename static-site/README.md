# NDDB NDLM Static Site

Pure HTML / CSS / JSON build of the NDDB NDLM Bovine Biometric Identification platform. No build step required.

## Deploy on Vercel

1. Import this repository into Vercel.
2. **Root Directory**: set to `static-site`.
3. **Framework Preset**: `Other`.
4. Leave Build Command and Output Directory blank.
5. Deploy.

`vercel.json` enables clean URLs so `/enrollment` serves `enrollment.html`.

## Local preview

```bash
cd static-site
python3 -m http.server 8080
```

Open http://localhost:8080.

## Files

- `index.html` – Landing / overview
- `enrollment.html` – Animal enrollment
- `verification.html` – AI verification console
- `monitoring.html` – Pilot dashboard
- `admin.html` – System administration
- `mobile.html` – FLW mobile capture preview
- `styles.css` – Government theme
- `app.js` – Shared header/footer + accessibility
- `data.json` – Platform content & stats
