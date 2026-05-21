"use client";

import { ChangeEvent, useState } from "react";

function normalizeFilesType(files: FileList) {
  return Array.from(files).map((file) => ({
    name: file.name,
    size: file.size,
    type: file.type,
  }));
}

export function FileUpload() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [upload, setIsUpload] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;
    setFiles(selectedFiles);
  };

  const handleUpload = () => {
    if (!files) return;
    setIsUpload(true);
  };

  function clearAll() {
    setFiles(null);
    setIsUpload(false);
  }

  return (
    <div>
      <p className="text-xl font-bold">File Upload</p>
      <div className="flex items-center gap-2 mt-3 [&>button]:text-black [&>button]:cursor-pointer [&>button]:text-lg [&>button]:font-semibold [&>button]:hover:bg-orange-400 [&>button]:transition-colors [&>button]:duration-400">
        <input
          type="file"
          onChange={handleFileChange}
          multiple
          accept="image/*"
        />
        <button
          className="w-30 h-10 rounded-sm bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!files || files.length === 0}
          onClick={handleUpload}
        >
          Upload
        </button>
        <button
          className="w-30 h-10 rounded-sm bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!files || files.length === 0}
          onClick={clearAll}
        >
          clear all
        </button>
      </div>
      {upload && files && <FileUploadTemplate files={files} />}
    </div>
  );
}

function FileUploadTemplate({ files }: { files: FileList }) {
  const data = normalizeFilesType(files);

  return (
    <div>
      files: {data.length}
      {data.map((file) => (
        <div
          key={file.name}
          className="space-y-2 bg-red-400 p-3 rounded-sm mt-3"
        >
          <p>{file.name}</p>
          <p>
            {Math.round(file.size / 1024).toFixed(2)} KB - {file.type}
          </p>
        </div>
      ))}
    </div>
  );
}
