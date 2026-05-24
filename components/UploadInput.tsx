import { ChangeEvent, Dispatch, SetStateAction } from "react";

type UploadInputProps = {
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function UploadInput({ setFiles }: UploadInputProps) {
  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = e.target.files;

    if (selectedFiles) {
      const fileList = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...fileList]);
    }

    e.target.value = "";
  }

  return (
    <label htmlFor="file-input">
      <input
        type="file"
        accept=".png,.jpg,.svg,.gif,.pdf"
        aria-label="select files to upload"
        id="file-input"
        hidden
        multiple
        onChange={handleFileChange}
      />
      <span className="text-sm md:text-base font-semibold text-[#6941c6] hover:underline cursor-pointer">
        Click to upload and attach files
      </span>
    </label>
  );
}
