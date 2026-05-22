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
          <span className="truncate text-sm font-medium text-secondary">
            Example dashboard screenshot.jpg
          </span>
          <Trash2
            size={16}
            className="text-red-500 hover:text-red-600 cursor-pointer transition-colors duration-200 mt-0.5"
          />
        </div>

        <div className="flex gap-2 items-center">
          <span className="truncate text-sm whitespace-nowrap text-[#525252]">
            720 KB
          </span>
          <hr className="h-3 w-px rounded-t-full rounded-b-full border-none bg-gray-500" />
          <div className="text-sm font-medium text-[#525252] flex items-center gap-1">
            <CloudUpload size={12} color="gray" />
            Uploading...
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
