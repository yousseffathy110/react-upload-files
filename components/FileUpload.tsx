import { UploadIcon } from "./UploadIcon";
import { UploadInput } from "./UploadInput";
import { UploadListItem } from "./UploadListItem";

export function FileUpload() {
  return (
    <div className="container mx-auto border border-gray-300 md:py-4 md:px-5 p-2 rounded-sm md:rounded-md shadow-sm space-y-3 md:space-y-5">
      <h1 className="text-sm md:text-base font-bold">File upload example:</h1>
      <div className="max-w-lg min-h-31.5 space-y-5 mx-auto">
        {/* upload component  */}
        <div className="p-2 md:py-4 md:px-5 border-dashed border-2 rounded-sm md:rounded-md border-gray-300 flex items-center justify-center mx-auto flex-col gap-2">
          <UploadIcon />
          <div className="space-y-1 text-center">
            <UploadInput />
            <p className="text-xs text-[#525252] font-medium tracking-tight">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </div>

        {/* files list */}
        <ul className="space-y-2">
          <UploadListItem type="SVG" />
          <UploadListItem type="PNG" />
          <UploadListItem type="JPG" />
          <UploadListItem type="GIF" />
          <UploadListItem type="PDF" />
        </ul>
      </div>
    </div>
  );
}
