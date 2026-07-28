import { Container, Input } from "~/ui/components";

export default function InputPage() {
  return (
    <Container className="space-y-4">
      <Input placeholder="Enter text" />
      <Input label="Whatever" placeholder="Enter text" />
      <Input
        label="Whatever"
        placeholder="Enter text"
        description="Do as you wish"
      />
      <Input disabled placeholder="Enter text" />
      <Input
        invalid
        placeholder="Enter text"
        description="Yes"
        errors={[{ message: "What?" }]}
      />

      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
      />

      <Input
        label="Search"
        type="search"
        placeholder="Search…"
        defaultValue="query"
      />

      <Input
        label="Clearable"
        placeholder="Enter text"
        clearable
        defaultValue="Clear me"
        description="An X button appears while there is a value."
      />
    </Container>
  );
}
