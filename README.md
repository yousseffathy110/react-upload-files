# React File Upload Application

A modern file upload interface built with **Next.js**, **React Query**, and **TypeScript**. This application provides a complete file upload experience with real-time progress tracking, upload status management, and intuitive file management features.

## 🚀 Features

- **Multi-File Selection**: Select and upload multiple files at once
- **Real-time Progress Tracking**: Visual progress bar showing upload percentage for each file
- **Upload Status Management**: Track file status (idle, uploading, success, error) with visual indicators
- **File Type Detection**: Automatic file icon rendering based on file extension (SVG, PNG, JPG, GIF, PDF)
- **Toast Notifications**: User-friendly feedback with success/error messages
- **File Removal**: Remove files before or after upload attempt
- **Responsive Design**: Mobile-first Tailwind CSS styling
- **Type-Safe**: Full TypeScript implementation with strict type checking

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **State Management**: [React Query](https://tanstack.com/query) (useQuery/useMutation)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Paths
- **Runtime**: [Bun](https://bun.sh/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
.
├── app/
│   ├── globals.css          # Global Tailwind styles
│   ├── layout.tsx           # Root layout with Providers wrapper
│   ├── page.tsx             # Main entry point
│   └── Providers.tsx        # Client-side providers (ToastContainer)
├── components/
│   ├── FileIcon.tsx         # Dynamic file type icon renderer
│   ├── FileUpload.tsx       # Main upload container component
│   ├── UploadIcon.tsx       # Upload prompt icon
│   ├── UploadInput.tsx      # Hidden file input with label
│   └── UploadListItem.tsx   # Individual file item with progress & status
├── hooks/
│   └── useUploadFiles.ts    # React Query mutation hook for file uploads
├── utils/
│   └── getFileExtension.ts  # File extension detection utility
├── public/                  # Static assets
├── .env.local               # Environment variables (API_URL)
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## 🎯 Key Components

### FileUpload

Main container managing file state, upload progress, and upload status. Renders the input area and file list.

### UploadListItem

Displays individual files with:

- File icon based on extension
- File name and size
- Upload progress bar
- Status indicator (uploading, success, error)
- Remove button

### useUploadFiles Hook

React Query mutation hook that:

- Manages upload lifecycle (pending, success, error)
- Tracks upload progress
- Handles API requests with Axios
- Shows toast notifications
- Updates file and progress states

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun start
```

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://httpbin.org/post
```

## 🎨 Supported File Types

- **SVG** - Vector graphics
- **PNG** - Portable Network Graphics
- **JPG/JPEG** - Joint Photographic Experts Group
- **GIF** - Graphics Interchange Format
- **PDF** - Portable Document Format

## 💡 Key Implementation Details

- **File Input Handling**: Hidden `<input type="file">` with label-based custom styling
- **Extension Mapping**: Automatic MIME type to extension conversion (e.g., `image/jpeg` → `JPG`)
- **Progress Tracking**: Real-time upload progress via Axios `onUploadProgress` callback
- **State Management**: React Query for async state, React hooks for local UI state
- **Error Handling**: Graceful error handling with toast notifications and status updates
- **Accessibility**: ARIA labels and semantic HTML for better screen reader support
