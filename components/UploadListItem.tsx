import { CircleCheck, CircleX, CloudUpload, Trash2 } from "lucide-react";
import FileIcon from "./FileIcon";
import { getFileExtension } from "@/utils/getFileExtension";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { type UploadStatusType } from "./FileUpload";

const STATUS_CONFIG = {
  uploading: {
    icon: <CloudUpload size={15} color="gray" />,
    label: "Uploading...",
  },
  success: {
    icon: (
      <CircleCheck
        size={15}
        className="fill-green-500 [&>path]:stroke-white [&>circle]:stroke-green-500"
      />
    ),
    label: "Successful",
  },
  error: {
    icon: (
      <CircleX
        size={15}
        className="fill-red-500 [&>path]:stroke-white [&>circle]:stroke-red-500"
      />
    ),
    label: "Failed",
  },
  idle: {
    icon: <CloudUpload size={15} color="gray" />,
    label: "Ready",
  },
} satisfies Record<UploadStatusType, { icon: ReactNode; label: string }>;

type UploadListItemProps = {
  file: File;
  setFiles: Dispatch<SetStateAction<File[]>>;
  uploadProgress: number;
  uploadStatus: UploadStatusType;
};

export function UploadListItem({
  file,
  setFiles,
  uploadProgress,
  uploadStatus,
}: UploadListItemProps) {
  function handleRemoveFile() {
    setFiles((prevFiles) => prevFiles.filter((f) => f.name !== file.name));
  }

  return (
    <li className="p-2 md:p-4 border rounded-sm md:rounded-md border-gray-300 w-full flex items-start gap-2">
      <FileIcon
        extension={
          getFileExtension(file) as "JPG" | "SVG" | "PNG" | "GIF" | "PDF"
        }
      />

      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between w-full">
          <span
            className="truncate text-sm font-medium text-secondary"
            aria-label="File name"
          >
            {file.name}
          </span>
          <button
            type="button"
            aria-label="Remove file"
            onClick={handleRemoveFile}
          >
            <Trash2
              size={16}
              className="text-gray-400 hover:text-red-400 cursor-pointer transition-colors duration-300 mt-0.5"
            />
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <span
            className="truncate text-sm whitespace-nowrap text-[#525252]"
            aria-label="File size"
          >
            {Math.round(file.size / 1024)} KB
          </span>

          {uploadStatus !== "idle" && (
            <hr className="h-3 w-px rounded-t-full rounded-b-full border-none bg-gray-500" />
          )}

          <div className="flex items-center gap-1">
            {STATUS_CONFIG[uploadStatus]?.icon}
            <span
              className="text-sm font-medium text-[#525252]"
              aria-label="Upload status"
            >
              {STATUS_CONFIG[uploadStatus]?.label}
            </span>
          </div>
        </div>

        <div
          role="progressbar"
          aria-valuenow={uploadProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-2 w-full overflow-hidden rounded-md bg-[#e5e5e5] mt-1"
        >
          <div
            style={{ transform: `translateX(-${100 - uploadProgress}%)` }}
            className="size-full rounded-md bg-[#6941c6] transition duration-75 ease-linear"
          ></div>
        </div>
      </div>
    </li>
  );
}
