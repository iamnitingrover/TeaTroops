# Teatroops

Teatroops is a modern e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. It provides a seamless shopping experience with a focus on performance and scalability.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Next.js**: Server-side rendering, static site generation, and API routes.
- **TypeScript**: Type-safe development with TypeScript.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Dynamic Imports**: Optimized loading of components.
- **Responsive Design**: Mobile-first responsive design.
- **SEO Optimized**: Built-in SEO optimizations.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/teatroops.git
   cd teatroops
   ```

2. **Install dependencies**:
    ```
    npm install
    ```

3. **Set up environment variables**:

    Create a .env.local file in the root of your project and add the necessary environment variables

    ```
    NEXT_PUBLIC_GOOGLE_SHEETS_CREDENTIALS={"type": "service_account", ...}
    NEXT_PUBLIC_GOOGLE_SHEET_ID=your-google-sheet-id
    NEXT_PUBLIC_EMAIL_USER=your-email
    NEXT_PUBLIC_EMAIL_PASS=your-email-password
    NEXT_PUBLIC_GA_MEASUREMENT_ID=your-google-analytics-measurement-id
    NEXT_PUBLIC_WHATSAPP_NUMBER=your-phone-number
    NEXT_PUBLIC_SUPPORT_EMAIL=your-support-email
    NEXT_PUBLIC_SUPPORT_EMAIL2=your-support-email2
    ```

4. **Run the development server**:
    ```
    npm run dev
    ```

    Open http://localhost:3000 with your browser to see the result.

## Project Structure

    teatroops/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── about/
    │   │   └── page.tsx
    │   ├── shop/
    │   │   └── page.tsx
    │   ├── contact/
    │   │   └── page.tsx
    │   └── product/
    │       └── [slug]/
    │           └── page.tsx
    ├── components/
    │   ├── ui/
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── modal.tsx
    │   │   └── dropdown.tsx
    │   ├── layout/
    │   │   ├── header.tsx
    │   │   ├── footer.tsx
    │   │   └── sidebar.tsx
    │   └── forms/
    │       ├── input.tsx
    │       ├── checkbox.tsx
    │       └── select.tsx
    ├── public/
    │   └── placeholder.svg
    ├── styles/
    │   └── globals.css
    ├── lib/
    │   └── utils.ts
    ├── next.config.js
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── postcss.config.js
    └── README.md

## Scripts

    npm run dev: Run the development server.
    npm run build: Build the application for production.
    npm start: Start the production server.
    npm run lint: Run ESLint to check for linting errors.
    npm run test: Run tests.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

    1. Fork the repository.
    2. Create a new branch (git checkout -b feature-branch).
    3. Make your changes.
    4. Commit your changes (git commit -m 'Add some feature').
    5. Push to the branch (git push origin feature-branch).
    6. Open a pull request.