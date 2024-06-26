"use client";
import fetcher from "@/service/fetcher";
import { SWRConfig } from "swr";

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
      {children}
    </SWRConfig>
  );
};
