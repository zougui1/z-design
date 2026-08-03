import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { AppSidebar } from "~/components/AppSidebar";
import { env } from "~/env";
import { BaseSidebar, Header, Link, Typography } from "~/ui/components";
import { AppMenu, DeploymentBadge } from "~/ui/features/apps";
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
        <AppSidebar
          banner={
            <Header
              className="border-border bg-background/85 flex h-(--header-height)
                items-center gap-4 border-b px-6 backdrop-blur-xs"
            >
              <BaseSidebar.Trigger className="-ml-2 md:hidden" />

              <Link href="/">
                <Typography.H4 className="font-semibold">
                  Z Design
                </Typography.H4>
              </Link>

              <DeploymentBadge
                target={env.NEXT_PUBLIC_DEPLOY_TARGET}
                className="ml-auto"
              />

              <AppMenu current="ZUI" />
            </Header>
          }
        >
          {children}
        </AppSidebar>
      </body>
    </html>
  );
}
