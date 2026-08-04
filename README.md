# DongJun Lee — Personal Website

Dependency-free single-page portfolio for `https://djlee1208.github.io`.

## Before publishing

1. Replace `assets/profile-placeholder.svg` with a professional portrait. The simplest option is to export a portrait as `assets/profile.jpg`, then change the image path in `index.html` from `assets/profile-placeholder.svg` to `assets/profile.jpg`. Use a vertical 4:5 crop, ideally at least 1200 × 1500 pixels.
2. Replace `assets/Dongjun_Lee_Resume.pdf` whenever the résumé is updated. Keep this filename so the website links continue to work.
3. Review ongoing-research language before each public release to ensure it remains appropriate to disclose.

No build step is required. Open `index.html` directly or serve this directory with any static file server.

## Publish to GitHub Pages

Create a public repository named `DJLee1208.github.io`, then run from this directory:

```bash
git remote add origin https://github.com/DJLee1208/DJLee1208.github.io.git
git push -u origin main
```

GitHub Pages automatically publishes a user-site repository from the default branch. If needed, open the repository's **Settings → Pages** and select **Deploy from a branch**, `main`, `/ (root)`.
