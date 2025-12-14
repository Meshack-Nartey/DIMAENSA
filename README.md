# Dimaensa Restaurant Website

> Authentic Ghanaian dining experience in Abelemkpe, Accra

A modern, responsive single-page website for Dimaensa Restaurant, showcasing authentic Ghanaian cuisine, customer reviews, and easy online reservations.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-production-green.svg)

## 🌟 About

**Dimaensa** ("eat till the last drop") is a welcoming dining space in Abelemkpe, Accra, serving traditional Ghanaian dishes with warm hospitality. This website provides a complete digital presence with:

- **Menu showcase** with downloadable PDF
- **Featured dishes** gallery
- **Customer reviews** section
- **Online reservation** system
- **Interactive contact** with WhatsApp, email, and Instagram
- **Embedded maps** for easy navigation

## 🚀 Features

### Core Sections
- **Home/Hero** - Eye-catching landing with call-to-action
- **Introduction** - Brand story and value proposition
- **Featured Dishes** - Four signature dishes with images
- **Visit Us** - Embedded Google Maps location
- **About** - Restaurant history and mission
- **Menu** - PDF download with full pricing
- **Explore** - Category highlights and menu access
- **Reviews** - Customer testimonials
- **Reservations** - Interactive booking form
- **Contact** - Full contact details with actionable links
- **Footer** - Navigation and social media icons

### Technical Highlights
✅ **Fully Responsive** - Mobile-first design with 8 breakpoints (360px–1024px+)  
✅ **Performance Optimized** - Lazy loading images, efficient caching  
✅ **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation  
✅ **SEO Ready** - Meta tags, structured content  
✅ **Modern CSS** - CSS Grid, Flexbox, custom properties  
✅ **Interactive JS** - Mobile nav, scroll animations, form handling  
✅ **Security Headers** - XSS protection, frame options, content type enforcement

## 📁 Project Structure

```
DIMAENSA/
├── index.html              # Main single-page application
├── netlify.toml            # Netlify deployment config
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
│
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles with media queries
│   │
│   ├── js/
│   │   └── main.js         # Navigation, animations, form logic
│   │
│   ├── img/
│   │   ├── hero.png        # Hero section background
│   │   ├── image.png       # Intro section image
│   │   ├── logo2.jpg       # About section & favicon
│   │   ├── logo.png        # Alternative logo
│   │   ├── bankuwithtilpia.jpg
│   │   ├── fufuwithlighsoup.jpg
│   │   ├── jollofricewithgrilledchicken.jpg
│   │   └── Wok-tossed rice with colorful veggies and your protein choice..jpg
│   │
│   └── menu.pdf            # Downloadable restaurant menu
│
└── .git/                   # Git version control
```

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **HTML** | HTML5, Semantic markup |
| **CSS** | CSS3, Grid, Flexbox, Custom Properties |
| **JavaScript** | Vanilla ES6+ |
| **Fonts** | Google Fonts (Playfair Display, Inter) |
| **Hosting** | Netlify |
| **Version Control** | Git |

## 🎨 Design System

### Color Palette
```css
--primary: #8B4513      /* Warm brown */
--primary-dark: #6d3410 /* Dark brown */
--secondary: #F5E6D3    /* Cream */
--accent: #D2691E       /* Terracotta */
--text: #2C1810         /* Dark chocolate */
--text-light: #6D6258   /* Muted brown */
--bg: #FDF8F3           /* Off-white */
```

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)
- **Scale:** Responsive, 14px–48px

### Responsive Breakpoints
- **1024px+** - Desktop (4-column grids)
- **900px** - Relaxed grids
- **768px** - Tablet
- **640px** - Small tablet
- **540px** - Large mobile
- **480px** - Mobile
- **360px** - Small mobile

## 🚀 Deployment

### Quick Deploy to Netlify

#### Option 1: Drag & Drop (Instant)
1. Visit [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire `DIMAENSA` folder
3. Site goes live immediately!

#### Option 2: Git Deploy (Recommended)
```powershell
# Already pushed to GitHub
git status

# On Netlify:
# 1. New site → Import from Git
# 2. Select your repository
# 3. Auto-detects netlify.toml
# 4. Deploy!
```

#### Option 3: Netlify CLI
```powershell
npm install -g netlify-cli
cd DIMAENSA
netlify deploy --prod
```

### Production Optimizations
- **Asset Caching:** 1 year for static files (CSS/JS/images)
- **PDF Caching:** 24 hours
- **Security Headers:** XSS, frame options, content-type
- **SPA Routing:** Proper redirect handling
- **Lazy Loading:** All images load on demand

## 📝 Configuration Files

### `netlify.toml`
```toml
[build]
  publish = "."
  
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    
[[headers]]
  for = "/assets/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 🔧 Local Development

No build process required! Simply:

1. **Clone the repository:**
   ```powershell
   git clone <your-repo-url>
   cd DIMAENSA
   ```

2. **Open in browser:**
   - Double-click `index.html`, or
   - Use a local server:
     ```powershell
     # Python
     python -m http.server 8000
     
     # Node.js
     npx serve .
     
     # PHP
     php -S localhost:8000
     ```

3. **View at:** `http://localhost:8000`

## 📱 Contact Information

**Dimaensa Restaurant**  
📍 52 Swaniker Street, Abelemkpe, Accra  
📞 [0532411380](tel:0532411380)  
✉️ [dimaensagh@gmail.com](mailto:dimaensagh@gmail.com)  
💬 WhatsApp: [+233242001247](https://wa.me/233242001247)  
📸 Instagram: [@dimaensa_](https://www.instagram.com/dimaensa_?igsh=MXNlY3YzbHIwOHRzMw==)  
🕐 Hours: 11:30 AM – 11:00 PM

## ✅ Pre-Launch Checklist

- [x] Responsive design (all breakpoints tested)
- [x] Favicon configured
- [x] Social media links active
- [x] Contact form functional
- [x] Google Maps embedded
- [x] SEO meta tags
- [x] Performance optimized
- [x] Security headers
- [ ] Replace placeholder `menu.pdf` with actual menu
- [ ] Add `logo2.png` for favicon (currently using .jpg)
- [ ] Custom domain setup (optional)
- [ ] Analytics integration (optional)

## 🐛 Known Issues / Todo

1. **Menu PDF** - Replace placeholder with actual restaurant menu
2. **Favicon format** - Convert logo2.jpg to logo2.png for better compatibility
3. **Form submission** - Currently logs to console; integrate backend/service (Netlify Forms, Formspree, etc.)

## 📄 License

Copyright © 2025 Dimaensa Restaurant. All rights reserved.

---

**Built with ❤️ for authentic Ghanaian dining**

For technical support or website updates, contact the development team.
