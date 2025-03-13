# Project Portfolio

A simple and Beautiful Porfolio made with Nextjs and Shadcn Ui.

![Demo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u7eq68h0uvs6xqgw3yqe.jpeg)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Configuration

This project uses a centralized configuration approach for all personal information. The main configuration file is located at:

```
src/config/portfolio.config.ts
```

### Configuration Structure

The configuration file contains the following sections:

- **Basic Information**: Name, title, description, location
- **Contact Information**: Email and other contact details
- **Social Media Links**: Links to various social media profiles
- **SEO Information**: Keywords, metadata, and SEO-related settings
- **About Information**: Bio, hobbies, and personal details
- **Skills**: Programming languages, frameworks, tools, and professional roles
- **Education**: Academic background and qualifications
- **Projects**: Portfolio of projects with descriptions and links
- **More Links**: Additional external links and resources

### Customizing Your Portfolio

To personalize the portfolio, simply edit the values in the `portfolio.config.ts` file. All changes will be reflected throughout the site automatically without having to modify multiple files.

Example usage in a component:

```typescript
import { portfolioConfig } from "@/config/portfolio.config";

// Access configuration values
const { name, title } = portfolioConfig;
```
