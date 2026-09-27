# Roseline — Portfolio
Personal portfolio for Roseline, a data scientist, data analyst and full-stack developer who turns data into meaningful insights and builds practical, intelligent solutions.
## What's inside
- **Hero** with a short intro and a terminal-style "whoami" card
- **About** section describing my approach: Data → Insight → Intelligent Solution
- **Skills** grouped by category (Programming, Data & Analytics, Machine Learning)
- **Projects** including FloodGuard KE and Britam Customer Insights
- **Contact** links for email and GitHub
## Built with
Plain HTML, CSS and JavaScript. No build step or dependencies.
## Run it locally
Open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000
```
then visit http://localhost:8000.
## Editing content
Skills and projects are rendered from data arrays in `script.js`:
- `skillGroups` holds each skill category and its skills.
- `projects` holds each project's title, description, technologies and optional `links` (`demo` and/or `code`). A link only appears on the card when it is set.
## Files
| File | Purpose |
| --- | --- |
| `index.html` | Page structure and static content |
| `style.css` | All styles |
| `script.js` | Renders skills and projects, and the navbar scroll effect |
| `favicon.svg` | Browser tab icon |
| `rose_photo.jpg` | Profile photo |