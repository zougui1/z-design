import { Mail, Search, X } from "lucide-react";

import { BaseInputGroup, Container, Input } from "~/ui/components";

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
        placeholder="Enter text"
        startAddon={<Mail />}
        invalid
      />

      <Input
        label="Search"
        placeholder="Enter text"
        endAddon={
          <BaseInputGroup.Button>
            <X />
          </BaseInputGroup.Button>
        }
      />

      <Input
        label="Search"
        placeholder="Enter text"
        startAddon={<Search />}
        endAddon={
          <BaseInputGroup.Button>
            <X />
          </BaseInputGroup.Button>
        }
      />
    </Container>
  );
}
