import { UploadIcon } from "./UploadIcon";
import { UploadInput } from "./UploadInput";

export function FileUpload() {
  return (
    <div className="container mx-auto border border-gray-300 md:py-4 md:px-5 p-2 rounded-sm md:rounded-md shadow-sm space-y-3 md:space-y-5">
      <h1 className="text-sm md:text-base font-bold">File upload example:</h1>
      <div className="p-2 md:py-4 md:px-5 border-dashed border-2 rounded-sm md:rounded-md border-gray-300 max-w-lg min-h-31.5 flex items-center justify-center mx-auto flex-col gap-2">
        <UploadIcon />
        <div className="space-y-1 text-center">
          <UploadInput />
          <p className="text-xs text-[#525252] font-medium tracking-tight">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </p>
        </div>
      </div>
    </div>
  );
}
