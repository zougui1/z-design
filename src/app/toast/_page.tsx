"use client";

import { Container, Typography, Toast, Button } from "~/ui/components";
import { cn } from "~/ui/utils";

import { ToastList } from "./_ToastList";
import { useState } from "react";
import { CheckIcon } from "lucide-react";

const toastManager = Toast.createManager();

const TEXTS = [
  "Short message.",
  "A bit longer message that spans two lines.",
  "This is a longer description that intentionally takes more vertical space to demonstrate stacking with varying heights.",
  "An even longer description that should span multiple lines so we can verify the clamped collapsed height and smooth expansion animation when hovering or focusing the viewport.",
];

const colors = [
  "default",
  "neutral",
  "primary",
  "secondary",
  "success",
  "warning",
  "destructive",
  "info",
] as const;

const Section = ({
  title,
  children,
  className,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <Typography.H2>{title}</Typography.H2>}

      <div className={cn("flex flex-wrap gap-5", className)}>{children}</div>
    </div>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Toast.Provider toastManager={toastManager}>
        <Toast.Portal>
          <Toast.Viewport>
            <ToastList />
          </Toast.Viewport>
        </Toast.Portal>

        <div className="flex flex-col gap-8">
          <Section title="Button">
            <Button
              onClick={() => {
                setCount((prev) => prev + 1);

                const description =
                  TEXTS[Math.floor(Math.random() * TEXTS.length)];

                toastManager.add({
                  title: `Toast ${count + 1} created`,
                  description,
                });
              }}
            >
              Create toast
            </Button>
          </Section>

          <Section title="Promise">
            <Button
              onClick={() => {
                setCount((prev) => prev + 1);

                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                toastManager.promise(
                  new Promise<string>((resolve) => {
                    setTimeout(() => {
                      resolve("operation completed");
                    }, 500);
                  }),
                  {
                    loading: "Loading...",
                    success: "Success!",
                    error: "Error",
                  },
                );
              }}
            >
              Success
            </Button>

            <Button
              onClick={() => {
                setCount((prev) => prev + 1);

                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                toastManager.promise(
                  new Promise<string>((resolve, reject) => {
                    setTimeout(() => {
                      reject(new Error("operation failed"));
                    }, 1500);
                  }),
                  {
                    loading: "Loading...",
                    success: "Success!",
                    error: "Error",
                  },
                );
              }}
            >
              Error
            </Button>
          </Section>
        </div>
      </Toast.Provider>
    </Container>
  );
}
