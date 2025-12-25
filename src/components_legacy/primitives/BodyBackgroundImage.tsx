"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "~/ui/utils";

const images = [
  "/Siranor cuddling Zougui.jpg",
  "/Velgaros kissing Zougui.jpg",
  "/Alfie kissing Zougui.png",
  "/Alison transforming Zougui.png",
] as const;

export interface BodyBackgroundImageProps extends React.ComponentProps<"div"> {}

export const BodyBackgroundImage = ({
  className,
  ...props
}: BodyBackgroundImageProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [focused, setFocused] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!document.hasFocus()) {
      setFocused(false);
    }

    window.addEventListener("blur", () => {
      setFocused(false);
    });
    window.addEventListener("focus", () => {
      setFocused(true);
    });
  }, []);

  return (
    <div {...props} className={cn("inset fixed -z-10 h-svh w-svw", className)}>
      <Image
        data-focused={!focused ? "true" : undefined}
        className="pointer-events-none object-cover transition-[filter]
          data-[focused=true]:blur-3xl"
        src={images[imageIndex] ?? ""}
        alt=""
        aria-hidden
        fill
        priority
      />
    </div>
  );
};
