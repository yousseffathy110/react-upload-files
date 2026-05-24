import { useMutation } from "@tanstack/react-query";
import { Slide, toast } from "react-toastify";
import axios from "axios";
import React from "react";
import { UploadStatusType } from "@/components/FileUpload";

export function useUploadFiles(
  files: File[],
  setFiles: React.Dispatch<React.SetStateAction<File[]>>,
  setUploadProgress: React.Dispatch<React.SetStateAction<number>>,
  uploadStatus: UploadStatusType,
  setUploadStatus: React.Dispatch<React.SetStateAction<UploadStatusType>>,
) {
  return useMutation({
    mutationFn: (files: File[]) => {
      setUploadStatus("uploading");
      return handleFileUpload(files, setUploadProgress);
    },
    onSuccess: () => {
      setFiles([]);
      setUploadProgress(0);
      setUploadStatus("success");
      toast.success("Files uploaded successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    },
    onError: () => {
      setUploadStatus("error");
      toast.error("Failed to upload files.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    },
    onSettled: () => {
      setUploadProgress(0);
      if (uploadStatus !== "error") {
        setUploadStatus("idle");
      }
    },
  });
}

async function handleFileUpload(
  files: File[],
  setUploadProgress: React.Dispatch<React.SetStateAction<number>>,
) {
  if (!files.length) return;

  const formData = new FormData();

  files.forEach((file, index) => {
    formData.append(`files-${index}`, file);
  });

  await axios.post(process.env.NEXT_PUBLIC_API_URL || "", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      const progress = progressEvent.total
        ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
        : 0;
      setUploadProgress(progress);
    },
  });
}
