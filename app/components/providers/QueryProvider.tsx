"use client";

import {
  QueryClient,
  QueryClientProvider,
  useIsFetching,
} from "@tanstack/react-query";

import Loader from "../Loader/Loader";
import css from "./QueryProvider.module.css";

const queryClient = new QueryClient();

function GlobalLoader() {
  const isFetching = useIsFetching();

  if (!isFetching) return null;

  return (
    <div className={css.overlay}>
      <Loader />
    </div>
  );
}

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalLoader />
      {children}
    </QueryClientProvider>
  );
}
