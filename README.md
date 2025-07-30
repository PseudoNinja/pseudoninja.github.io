# Eric Miller Resume Site

This is a personal resume website built with Next.js, showcasing the professional experience, skills, projects, and volunteer activities of Eric Miller, Director of Research and Innovation at National Defense Lab. The site features a clean, responsive design with plain CSS, a custom favicon, and thumbnailed sections for projects and activities to highlight technical and leadership expertise.

## Features

- **Professional Layout**: Organized sections for About, Experience, Projects, Education, Skills, Certifications, Activities, and Contact.
- **Responsive Design**: Optimized for desktop and mobile using plain CSS, with a sticky header and smooth navigation.
- **Thumbnailed Sections**:
  - **Projects**: Displays seven projects (e.g., Python Image Conversion Script, AWS DeepRacer) with thumbnails and links to live sites or GitHub repositories.
  - **Activities**: Highlights volunteer roles at National Defense Lab and Team Rubicon with custom thumbnails for visual appeal.
- **Custom Favicon**: A modern SVG favicon with "EM" initials, reflecting the site’s tech-inspired aesthetic.
- **Downloadable Resume**: Includes a downloadable PDF resume in the About section.
- **Tech Stack**: Built with Next.js (App Router), TypeScript, React Icons, and `next/image` for optimized image loading.

## Prerequisites

- **Node.js**: v20 or later
- **npm**: v9 or later
- **Git**: For version control and deployment
- **Optional**: LaTeX distribution (e.g., TeX Live) for compiling thumbnail images if using provided LaTeX files

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/PseudoNinja/resume-site.git
   cd resume-site
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Add Assets to `public` Directory**:
   - Place the following files in the `public` directory:
     - `favicon.svg`: Custom favicon (provided in repository)
     - `headshot.jpg`: Profile headshot (150x150 pixels)
     - `EricMiller-Resume-20250729.pdf`: Resume PDF
     - Project thumbnails (200x150 pixels):
       - `ram-one-placeholder.jpg`
       - `python-conversion-thumbnail.jpg`
       - `pseudoninja-placeholder.jpg`
       - `rammaster-placeholder.jpg`
       - `daisho-tactical-logo.png`
       - `susanmiller-placeholder.jpg`
       - `thumbnail-deep-racer.jpg`
     - Activity thumbnails (100x100 pixels):
       - `national-defense-placeholder.jpg`
       - `team-rubicon-placeholder.jpg`
   - To generate thumbnails, compile the LaTeX files (`python-conversion-thumbnail.tex`, `national-defense-placeholder.tex`, `team-rubicon-placeholder.tex`) using a LaTeX editor (e.g., Overleaf) or `latexmk -pdflatex`, then convert to JPG using ImageMagick:
     ```bash
     convert -density 72 python-conversion-thumbnail.pdf python-conversion-thumbnail.jpg
     ```

4. **Run Locally**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to preview the site.

5. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```
   Test the production build at `http://localhost:3000`.

## Deployment

The site is optimized for deployment on Vercel, but other platforms like Netlify or GitHub Pages are also supported.

### Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Sign up at [vercel.com](https://vercel.com) with your GitHub account.
   - Create a new project and import your `resume-site` repository.
   - Use default settings:
     - Build Command: `next build`
     - Output Directory: `.next`
     - Install Command: `npm install`
   - Deploy and access the site at the provided URL (e.g., `resume-site.vercel.app`).

3. **Custom Domain (Optional)**:
   - Add a domain in Vercel’s “Domains” settings and update your DNS records (e.g., A records to Vercel’s IPs).

### Other Platforms

- **Netlify**:
  - Install Netlify CLI: `npm install -g netlify-cli`.
  - Run `ntl init` to link your repository.
  - Set build command to `next build && next export`, output directory to `out`.
  - Deploy with `ntl deploy --prod`.

- **GitHub Pages**:
  - Add `"export": "next build && next export"` to `package.json` scripts.
  - Run `npm run export` to generate the `out` folder.
  - Use a GitHub Actions workflow to deploy (see repository for `.github/workflows/publish.yml`).

## Project Structure

```
resume-site/
├── public/
│   ├── favicon.svg
│   ├── headshot.jpg
│   ├── EricMiller-Resume-20250729.pdf
│   ├── ram-one-placeholder.jpg
│   ├── python-conversion-thumbnail.jpg
│   ├── pseudoninja-placeholder.jpg
│   ├── rammaster-placeholder.jpg
│   ├── daisho-tactical-logo.png
│   ├── susanmiller-placeholder.jpg
│   ├── thumbnail-deep-racer.jpg
│   ├── national-defense-placeholder.jpg
│   ├── team-rubicon-placeholder.jpg
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── styles.css
│   ├── globals.css
├── package.json
├── tsconfig.json
├── README.md
```

- **`app/page.tsx`**: Main page with About, Experience, Projects, Education, Skills, Certifications, Activities, and Contact sections.
- **`app/layout.tsx`**: Root layout with favicon and metadata.
- **`app/styles.css`**: Custom CSS for styling the site.
- **`app/globals.css`**: Global resets for consistent styling.
- **`public/`**: Static assets (images, favicon, resume PDF).

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make changes and commit: `git commit -m "Add your feature"`.
4. Push to your fork: `git push origin feature/your-feature`.
5. Open a pull request.

Please ensure code follows the project’s style (TypeScript, plain CSS) and includes tests if applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: [eric@pseudoninja.com](mailto:eric@pseudoninja.com)
- **GitHub**: [PseudoNinja](https://github.com/PseudoNinja)
- **LinkedIn**: [ericmiller](https://linkedin.com/in/ericmiller)