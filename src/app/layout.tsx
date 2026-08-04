import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { AppHeader } from "~/components";
import { AppSidebar } from "~/components/AppSidebar";
import "~/ui/styles/theme.css";
import { cn } from "~/ui/utils";

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
        <AppSidebar banner={<AppHeader />}>{children}</AppSidebar>
      </body>
    </html>
  );
}
