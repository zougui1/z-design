"use client";

import { useEffect, useState } from "react";

import { Progress, Container, Typography } from "~/ui/components";

const Section = ({
  title,
  children,
}: {
  title?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {title && <Typography.H2>{title}</Typography.H2>}
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
};

export default function ProgressPage() {
  const [value, setValue] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((current) => (current >= 100 ? 0 : current + 10));
    }, 800);
    return () => clearInterval(id);
  }, []);

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Progress">
          <Progress value={value} label="Downloading" showValue />
          <Progress value={66} />
          <Progress value={null} label="Working…" />
        </Section>
      </div>
    </Container>
  );
}
