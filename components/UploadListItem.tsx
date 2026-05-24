import { CloudUpload, Trash2 } from "lucide-react";
import FileIcon from "./FileIcon";

export function UploadListItem({
  type,
}: {
  type: "SVG" | "PNG" | "JPG" | "GIF" | "PDF";
}) {
  return (
    <li className="p-2 md:p-4 border rounded-sm md:rounded-md border-gray-300 w-full flex items-start gap-2">
      <FileIcon extension={type} />

      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between w-full">
          <span
            className="truncate text-sm font-medium text-secondary"
            aria-label="File name"
          >
            Example dashboard screenshot.jpg
          </span>
          <button type="button" aria-label="Remove file">
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
            720 KB
          </span>
          <hr className="h-3 w-px rounded-t-full rounded-b-full border-none bg-gray-500" />
          <div className="flex items-center gap-1">
            <CloudUpload size={15} color="gray" />
            {/* TODO: Implement upload status indicators */}
            {/* <CircleCheck
              size={15}
              className="fill-green-500 [&>path]:stroke-white [&>circle]:stroke-green-500"
            />
            <CircleX
              size={15}
              className="fill-red-500 [&>path]:stroke-white [&>circle]:stroke-red-500"
            /> */}
            <span
              className="text-sm font-medium text-[#525252]"
              aria-label="Upload status"
            >
              Uploading...
            </span>
          </div>
        </div>

        <div
          role="progressbar"
          //   aria-valuenow={50}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-2 w-full overflow-hidden rounded-md bg-[#e5e5e5] mt-1"
        >
          <div
            style={{ transform: "translateX(-50%)" }}
            className="size-full rounded-md bg-[#6941c6] transition duration-75 ease-linear"
          ></div>
        </div>
      </div>
    </li>
  );
}
