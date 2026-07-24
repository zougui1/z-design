import { Accordion, type AccordionItem, Container, Typography } from "~/ui/components";

const items: AccordionItem[] = [
  {
    value: "what",
    label: "What is Base UI?",
    content:
      "Base UI is a library of high-quality unstyled React components for design systems and web apps.",
  },
  {
    value: "start",
    label: "How do I get started?",
    content:
      "Head to the “Quick start” guide in the docs. If you’ve used unstyled libraries before, you’ll feel at home.",
  },
  {
    value: "use",
    label: "Can I use it for my project?",
    content: "Of course! Base UI is free and open source.",
  },
];

export default function AccordionPage() {
  return (
    <Container>
      <div className="flex max-w-lg flex-col gap-4">
        <Typography.H2>Accordion</Typography.H2>
        <Accordion items={items} />
      </div>
    </Container>
  );
}
