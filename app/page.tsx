"use client";

import { FileUpload } from "@/components/FileUpload";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function page() {
  return (
    <div className="px-2 py-5 md:p-5">
      <QueryClientProvider client={queryClient}>
        <FileUpload />
      </QueryClientProvider>
    </div>
  );
}
