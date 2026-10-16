# Bosworth Enterprises PTY LTD

Responsive company website prepared for www.bosworth.net.au. Dependency-free static generator; Node.js 22 or newer.

## Local development

Run `npm run build`, `npm run check`, then `npm run dev`. Open http://127.0.0.1:4173.

## Content and branding

Edit `site.json`. The supplied logo is included at `assets/bosentlogo.png`; forest green, sage and white follow its identity. No services, business names, company history, registration identifiers or contact details have been invented.

Trading names are generated from `brands`. Each entry creates a directory listing and a dedicated page. Categories are derived from the entries. Example schema (illustrative only):

```json
{"slug":"business-slug","name":"Confirmed trading name","category":"Confirmed category","summary":"Short description","description":"Full overview","services":["Confirmed service"],"website":"https://example.com","email":""}
```

Populate the company `email` and `phone` with approved public details. No contact form or message collection is active. The site currently contains no analytics or third-party fonts/scripts. Canonical URLs, sitemap.xml and robots.txt target www.bosworth.net.au. Review privacy wording if adding analytics or a form.

## GitHub and Cloudflare Pages

Repository: https://github.com/pzvl9w/bosworth-website

Connect that repository in Cloudflare Workers & Pages > Create application > Pages > Import Git repository. Use production branch `main`, framework preset None, build command `npm run build`, output directory `dist`, and Node.js 22+. The included wrangler.jsonc also describes the static Pages output for CLI deployments.

Add `www.bosworth.net.au` through the Pages project's Custom domains flow, then follow Cloudflare's DNS verification instructions. Add the apex domain separately if required. Check existing DNS before altering records; preserve email MX/TXT records. No DNS changes have been made by this project.

Official deployment reference: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## Status

Website built with the supplied logo, company email and three business-name entries. Renee Enterprises is shown as business-name history pointing to Brisbane First Aid Supplies. Business content was checked against https://brisbanefirstaidsupplies.com.au/ and https://sydneyfirstaidsupplies.com.au/ on 16 October 2026. Repository created under pzvl9w using the Bosfam Chrome profile. Cloudflare deployment and domain setup are pending account sign-in. No DNS change has been made.
