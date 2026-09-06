# Laterpay — Website

A static, no-build website for **Laterpay** (Campus Peer Lending & Ledger), built on the Fluid Bootstrap 5 template.

## 📁 What's inside

```
laterpay-site/
├── index.html          ← Main homepage (problem, how it works, security, market, revenue, team, SWOT)
├── community.html      ← WhatsApp Community page (join links + instructions)
├── README.md
└── assets/
    ├── css/
    │   ├── style.css        ← Base template styles (don't need to touch)
    │   └── laterpay.css     ← Laterpay brand colors & custom components (edit this for styling changes)
    ├── js/script.js
    ├── images/
    │   └── laterpay-logo.jpeg
    └── vendor/ (Bootstrap 5 + Bootstrap Icons, bundled locally)
```

## ✏️ Links already set

Both `index.html` and `community.html` are wired up with your real links:

- **Google Form**: `https://forms.gle/BHJaEvY9FjxCz2sE6`
- **WhatsApp Community**: `https://chat.whatsapp.com/Iefg4wQbR8m4jpXfTsQGCj`

If either ever changes, search both HTML files for the old link and replace every
occurrence (each appears in the navbar, hero/CTA buttons, and footer of both pages).

## 🚀 Hosting on GitHub Pages

1. Create a new GitHub repository (e.g. `laterpay-website`).
2. Upload **everything inside this folder** (`index.html`, `community.html`, `README.md`, and the `assets/` folder) to the root of the repo.
   - Via the GitHub website: click **Add file → Upload files**, drag in all the files/folders, and commit.
   - Via git:
     ```bash
     git init
     git add .
     git commit -m "Laterpay website"
     git branch -M main
     git remote add origin https://github.com/<your-username>/laterpay-website.git
     git push -u origin main
     ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and folder to `/ (root)`, then click **Save**.
6. Wait 1–2 minutes, then your site will be live at:
   `https://<your-username>.github.io/laterpay-website/`

No build step, server, or database is required — it's a plain HTML/CSS/JS site.

## 🎨 Customization

- **Colors**: brand colors live at the top of `assets/css/laterpay.css` (`--fluid-accent`, `--fluid-dark`, etc.).
- **Logo**: replace `assets/images/laterpay-logo.jpeg` (keep the filename, or update the `src` in both HTML files).
- **Copy**: all page text is directly editable in `index.html` / `community.html`.

## 🧱 Built with

- [Bootstrap 5.3](https://getbootstrap.com/) (bundled locally)
- [Bootstrap Icons](https://icons.getbootstrap.com/) (bundled locally)
- Google Fonts — Poppins (headings) & Inter (body)
- Vanilla JavaScript, no build tools required
- Base template: **Fluid** (free edition) by [TemplatesJungle](https://templatesjungle.com) — please keep the footer credit link per its free-use license.
