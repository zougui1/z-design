import { Container, Typography } from "~/ui/components";

export default function HomePage() {
  return (
    <Container>
      <Typography.H1>Work in Progress</Typography.H1>
      <Typography.Muted className="mt-2 block">
        Scroll down and the header slides out of view. Scroll back up — or return
        to the top — and it slides in again. Pure CSS, no JavaScript.
      </Typography.Muted>

      <div className="mt-8 space-y-4">
        {Array.from({ length: 30 }).map((_, index) => (
          <Typography.Paragraph key={index} className="max-w-2xl">
            {index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </Typography.Paragraph>
        ))}
      </div>
    </Container>
  );
}
