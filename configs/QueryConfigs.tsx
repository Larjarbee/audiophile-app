'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function QueryConfigs({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClients = new QueryClient();
  return (
    <QueryClientProvider client={queryClients}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right' /> */}
    </QueryClientProvider>
  );
}
