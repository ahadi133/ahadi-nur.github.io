# Ahadi Portfolio

Static portfolio site for business, data, and decision support work. The site is plain HTML, CSS, and JavaScript, so it can be published directly without a build step.

## Run locally

Open `index.html` in a browser, or serve the repository with any static-file server:

```text
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` publishes the repository to GitHub Pages whenever `main` is updated. To enable it:

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push to `main`, or run **Deploy site to GitHub Pages** from the repository's **Actions** tab.

After the workflow succeeds, GitHub shows the live URL in the workflow run and under **Settings → Pages**. Changes to the page content can be made in `index.html` and `data.js`; the next push to `main` republishes the site.
