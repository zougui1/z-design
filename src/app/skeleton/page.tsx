import { Container, Skeleton } from "~/ui/components";

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

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <div key={color} className="flex flex-col space-y-3">
            <Skeleton color={color} className="h-[125px] w-[250px]" />
            <div className="space-y-2">
              <Skeleton color={color} className="h-4 w-[250px]" />
              <Skeleton color={color} className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
