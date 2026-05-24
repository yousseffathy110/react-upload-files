"use client";
import { useState } from "react";
import { UploadIcon } from "./UploadIcon";
import { UploadInput } from "./UploadInput";
import { UploadListItem } from "./UploadListItem";
import { Loader } from "lucide-react";
import { useUploadFiles } from "@/hooks/useUploadFiles";

export type UploadStatusType = "idle" | "uploading" | "success" | "error";

export function FileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<UploadStatusType>("idle");

  const uploadFilesMutation = useUploadFiles(
    files,
    setFiles,
    setUploadProgress,
    uploadStatus,
    setUploadStatus,
  );
  const { isPending } = uploadFilesMutation;

  return (
    <div className="container mx-auto border border-gray-300 md:py-4 md:px-5 p-2 rounded-sm md:rounded-md shadow-sm space-y-3 md:space-y-5">
      <h1 className="text-sm md:text-base font-bold">File upload example:</h1>
      <div className="max-w-lg min-h-31.5 space-y-5 mx-auto">
        {/* upload component  */}
        <div className="p-2 md:py-4 md:px-5 border-dashed border-2 rounded-sm md:rounded-md border-gray-300 flex items-center justify-center mx-auto flex-col gap-2">
          <UploadIcon />
          <div className="space-y-1 text-center">
            <UploadInput setFiles={setFiles} />
            <p className="text-xs text-[#525252] font-medium tracking-tight">
              SVG, PNG, JPG, GIF or PDF Max file size (10MB).
            </p>
          </div>
        </div>

        {/* files list */}
        <ul className="space-y-2" aria-label="List of uploaded files">
          {files.map((file) => (
            <UploadListItem
              key={file.name}
              file={file}
              setFiles={setFiles}
              uploadProgress={uploadProgress}
              uploadStatus={uploadStatus}
            />
          ))}
        </ul>

        {files && files.length > 0 && (
          <button
            type="button"
            aria-label="Upload files"
            onClick={() => uploadFilesMutation.mutate(files)}
            disabled={isPending}
            className="w-full flex gap-2 items-center justify-center sm:max-w-50 py-2 px-4 bg-[#6941c6] text-white font-semibold rounded-md hover:bg-[#5a34a3] transition-colors duration-300 cursor-pointer"
          >
            {isPending && <Loader size={16} className="animate-spin" />}
            {isPending ? "Uploading..." : "Upload"}
          </button>
        )}
      </div>
    </div>
  );
}
