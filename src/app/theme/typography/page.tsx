import { Container, Typography } from "~/ui/components/base";

export default function HomePage() {
  return (
    <Container>
      <Typography.H1>h1. Heading</Typography.H1>
      <Typography.H2>h2. Heading</Typography.H2>
      <Typography.H3>h3. Heading</Typography.H3>
      <Typography.H4>h4. Heading</Typography.H4>
      <Typography.Paragraph>
        p. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography.Paragraph>
      <Typography.Muted>
        muted. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography.Muted>
    </Container>
  );
}
