import { Container, Drawer, Typography } from "~/ui/components";

const sides = ["right", "left", "top", "bottom"] as const;

export default function DrawerPage() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Typography.H2>Drawer</Typography.H2>
        <div className="flex flex-wrap gap-3">
          {sides.map((side) => (
            <Drawer
              key={side}
              side={side}
              trigger={<span className="capitalize">{side}</span>}
              title="Drawer"
              description="Slides in from the side. Swipe or tap the backdrop to dismiss."
            >
              <p className="text-sm">Drawer body content goes here.</p>
            </Drawer>
          ))}
        </div>
      </div>
    </Container>
  );
}
