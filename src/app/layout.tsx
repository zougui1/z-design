import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { cn } from "~/ui/utils";
import { Sidebar } from "~/ui/components";
import { AppSidebar } from "~/ui/AppSidebar";

export const metadata: Metadata = {
  title: "Z Design",
  description: "Z Design",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("dark", geist.variable)}>
      <body className="relative min-h-svh">
        <Sidebar.Provider>
          <AppSidebar />
          <Sidebar.Inset>{children}</Sidebar.Inset>
        </Sidebar.Provider>
      </body>
    </html>
  );
}
