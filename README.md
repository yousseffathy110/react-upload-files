# React File Upload Practice

A dedicated side project built with **Next.js** and **Tailwind CSS** to explore and implement best practices for file uploading in modern web applications. This repository serves as a playground for mastering various uploading techniques, custom SVG iconography, and complex UI/UX patterns.

## 🚀 Key Features

- **Strict File Validation**: Custom restrictions to only accept specific formats: `PNG`, `JPG`, `SVG`, and `GIF`.
- **Dynamic Icon System**: Reusable `FileIcon` component that renders custom SVG paths based on file extensions.
- **Accessible UI**: Implementation of ARIA progress bars and accessibility standards for a better user experience.
- **Responsive Design**: Mobile-first approach using Tailwind CSS for a seamless experience across all devices.
- **Modular Architecture**: Cleanly separated logic for inputs, progress items, and specific icons.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Runtime**: [Bun](https://bun.sh/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Path Implementation

## 📂 Project Structure

```text
.
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Main application layout
│   └── page.tsx             # Entry point featuring the FileUpload component
├── components/
│   ├── FileIcon.tsx         # Complex component for extension-specific SVG icons
│   ├── FileUpload.tsx       # Main container for the upload interface
│   ├── UploadIcon.tsx       # UI element for the upload trigger
│   ├── UploadInput.tsx      # Specialized hidden file input with custom labels
│   └── UploadListItem.tsx   # Individual file progress and status item
├── public/                  # Static assets and site icons
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## 📖 Key Learnings & Practices

- **Hidden File Inputs**: Mastering the technique of using `<label>` and `htmlFor` to style custom upload triggers while keeping the native file picker accessible.
- **SVG Path Optimization**: Manually crafting and organizing SVG paths within React components to reduce external asset dependency.
- **Type Safety**: Using TypeScript to enforce strict file extension handling and component props.
- **Build Optimization**: Fixing Common TypeScript/React errors related to ARIA attributes and DOM types during the Next.js build process.
