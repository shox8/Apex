import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const isError = (error: unknown): error is FetchBaseQueryError => {
  return (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof (error as Record<string, unknown>).data === "string"
  );
};
