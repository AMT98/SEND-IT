"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children?: ReactNode;
}
const queryClient = new QueryClient();

const QueryWrapper = ({ children }: Props) => (
  <QueryClientProvider>{children}</QueryClientProvider>
);

export default QueryWrapper;
