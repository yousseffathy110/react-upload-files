export function UploadInput() {
  return (
    <label htmlFor="file-input">
      <input
        type="file"
        accept=".png,.jpg,.jpeg,.svg,.gif"
        id="file-input"
        hidden
        multiple
      />
      <span className="text-sm md:text-base font-semibold text-[#6941c6] hover:underline cursor-pointer">
        Click to upload and attach files
      </span>
    </label>
  );
}
