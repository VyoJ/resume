# Clean Resume Website

This is a clean, minimalistic, and SEO-friendly personal portfolio website built with Next.js and Tailwind CSS. It's designed to be easily customizable to showcase your own resume and portfolio.

## Features

- **Clean and Minimalist Design:** Focuses on content and readability.
- **SEO Friendly:** Includes metadata generation and JSON-LD structured data for better search engine visibility.
- **Responsive Design:** Looks great on all devices.
- **Easy to Customize:** Portfolio data is managed in a single JSON file.
- **Built with Modern Technologies:** Next.js, React, TypeScript, Tailwind CSS.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [pnpm](https://pnpm.io/installation) (or npm/yarn if you prefer, but update commands accordingly)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-portfolio-repo.git
    cd your-portfolio-repo
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

### Running the Development Server

To start the development server, run:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

This portfolio is designed to be easily customized. Here's how you can make it your own:

### 1. Portfolio Data

All your personal information, experience, education, skills, projects, etc., are stored in a single JSON file:

- **File:** [`data/portfolio.json`](data/portfolio.json)

Open this file and replace the placeholder data with your own information. The structure is self-explanatory. Make sure to follow the existing format for each section:
- `profile`: Your personal details, bio, social links.
- `experience`: Your work experience.
- `education`: Your educational background.
- `skills`: Your skills, categorized.
- `projects`: Your projects, with descriptions, technologies, links, and images.
- `certifications`: Any certifications you have.
- `publications`: Articles or papers you've published.
- `personal`: Interests and languages. 
- `contact`: Your contact information.

### 2. Metadata and SEO

Good SEO is crucial for visibility. Here's where to update metadata:

- **Base Metadata (`app/layout.tsx`):**
  Update the `metadata` object in [`app/layout.tsx`](app/layout.tsx) for the default site title and description.

  ```typescript
  // filepath: app/layout.tsx
  // ...existing code...
  export const metadata: Metadata = {
    title: "Your Name | Your Title", // CHANGE THIS
    description:
      "Portfolio of Your Name, a Your Profession specializing in Your Skills.", // CHANGE THIS
  };
  // ...existing code...
  ```

- **Page-Specific Metadata (`app/page.tsx`):**
  The `generateMetadata` function in [`app/page.tsx`](app/page.tsx) dynamically generates metadata based on the content in `data/portfolio.json`. Ensure your `data/portfolio.json` has accurate `profile.name`, `profile.title`, and `profile.summary` fields.

- **JSON-LD Structured Data (`lib/seo.ts`):**
  The [`lib/seo.ts`](lib/seo.ts) file contains the `generateJsonLd` function which creates structured data for search engines. This function pulls data from `data/portfolio.json`. Review this file if you need to make advanced changes to the structured data schema.

- **Open Graph Image:**
  Replace the `public/og-image.jpg` file with your own image and update the `generateMetadata` function in `app/page.tsx` (recommended size: 1200x630 pixels). This image is used when sharing your portfolio on social media.

### 3. Styling

- **Tailwind CSS:** The project uses Tailwind CSS for styling.
- **Global Styles (`app/globals.css`):** For any global styles or Tailwind CSS customizations (like custom fonts or base styles), edit [`app/globals.css`](app/globals.css).
- **Fonts:** The default font is Inter. You can change it in [`app/layout.tsx`](app/layout.tsx) by importing and applying a different font from `next/font/google`.

### 4. Components

The UI is built with React components located in the `components/` directory. If you want to change the structure or appearance of specific sections (e.g., Profile, Experience), you can modify the respective component files.

### 5. Images and Assets

- **Profile Photo:** Update the `photo` field in `data/portfolio.json` under the `profile` section with the path to your profile picture (e.g., `public/profile.jpg`). Place your image in the `public/` directory.
- **Project Images:** For each project in `data/portfolio.json`, update the `image` field with the path to the project's image (e.g., `/images/projects/project-name.jpg`). Place these images in `public/projects/`.
- **Favicon:** Replace the favicon files in the `public/` directory (e.g., `favicon.ico`, `apple-touch-icon.png`, etc.) with your own.

## Building for Production

To create a production build, run:

```bash
pnpm build
```

This will generate an optimized version of your site in the `.next` folder.

## Deployment

You can deploy your Next.js portfolio to various platforms like Vercel, Netlify, Render, etc.

Refer to their Next.js deployment documentation for more details.

## License

This project is open-source and you are free to use and modify it. If you use this template, an attribution or a star on GitHub would be appreciated!