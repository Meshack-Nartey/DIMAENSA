# Dimaensa Restaurant - Deployment Guide

## 🚀 Deploy to Netlify

Your site is ready for production deployment on Netlify!

### Quick Deploy

#### Option 1: Drag & Drop (Easiest)
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire `DIMAENSA` folder onto the page
3. Your site will be live in seconds!

#### Option 2: GitHub/Git Deploy (Recommended)
1. Push your code to GitHub:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit - Dimaensa Restaurant"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy site"

#### Option 3: Netlify CLI
```powershell
# Install Netlify CLI
npm install -g netlify-cli

# Deploy from project folder
cd D:\DIMAENSA
netlify deploy --prod
```

### What's Included

✅ **netlify.toml** - Configuration with:
- Security headers (XSS protection, frame options)
- Cache optimization for assets (1 year for static files)
- PDF caching (24 hours)
- SPA routing support

✅ **.gitignore** - Excludes editor and system files

✅ **Placeholder menu.pdf** - Replace with your actual menu

✅ **All assets verified** - Images and resources ready

### Post-Deployment Checklist

1. **Replace menu.pdf**: Upload your real menu to `assets/menu.pdf`
2. **Add logo2.png**: Ensure favicon exists at `assets/img/logo2.png` (currently using .jpg)
3. **Custom domain**: Add your domain in Netlify dashboard → Domain settings
4. **SSL**: Netlify provides free HTTPS automatically
5. **Test**: Check all sections, forms, and download links

### Site Structure
```
DIMAENSA/
├── index.html              # Main page
├── netlify.toml           # Netlify config
├── .gitignore             # Git ignore rules
├── assets/
│   ├── css/
│   │   └── styles.css     # All styles
│   ├── js/
│   │   └── main.js        # Interactions
│   ├── img/               # Images
│   └── menu.pdf           # Menu PDF (replace!)
└── README.md              # This file
```

### Performance Tips

- All static assets are cached for 1 year
- Images use lazy loading
- Site is fully responsive
- Security headers enabled

### Need Help?

- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Community](https://answers.netlify.com/)

---

**Your site will be live at:** `https://your-site-name.netlify.app`

Customize the site name in Netlify dashboard → Site settings → Change site name
