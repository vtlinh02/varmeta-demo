
"use client"
import "@/styles/global.css";
import { Header } from "@repo/ui";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

// export const metadata: Metadata = {
// 	title: "Built on Gno",
// 	description: "Built on Gno",
// };

const queryClient = new QueryClient();
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} overflow-x-hidden relative bg-gray-100 min-h-screen`}>
        <QueryClientProvider client={queryClient}>
          <>
            <Header />
            {children}
          </>
        </QueryClientProvider>
      </body>
    </html>
  );
}

export default RootLayout