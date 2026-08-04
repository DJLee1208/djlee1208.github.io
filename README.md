# DongJun Lee — Personal Website

Dependency-free single-page portfolio for `https://djlee1208.github.io`.

## Before publishing

1. The current portrait is stored at `assets/profile.jpg`. Replace that file with another vertical portrait using the same filename whenever the profile photo is updated.
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
