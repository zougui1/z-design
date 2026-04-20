import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react";

import { BaseInputGroup, Container, Typography } from "~/ui/components";
import { cn } from "~/ui/utils";

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

export default function BaseInputGroupPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="Icon" className="flex-col">
          <BaseInputGroup.Root>
            <BaseInputGroup.Addon>
              <SearchIcon />
            </BaseInputGroup.Addon>

            <BaseInputGroup.Input placeholder="Search..." />
          </BaseInputGroup.Root>

          <BaseInputGroup.Root>
            <BaseInputGroup.Addon>
              <MailIcon />
            </BaseInputGroup.Addon>

            <BaseInputGroup.Input type="email" placeholder="Enter your email" />
          </BaseInputGroup.Root>

          <BaseInputGroup.Root>
            <BaseInputGroup.Addon>
              <CreditCardIcon />
            </BaseInputGroup.Addon>

            <BaseInputGroup.Input placeholder="Card number" />

            <BaseInputGroup.Addon align="inline-end">
              <CheckIcon />
            </BaseInputGroup.Addon>
          </BaseInputGroup.Root>

          <BaseInputGroup.Root>
            <BaseInputGroup.Input placeholder="Card number" />

            <BaseInputGroup.Addon align="inline-end">
              <StarIcon />
              <InfoIcon />
            </BaseInputGroup.Addon>
          </BaseInputGroup.Root>
        </Section>

        <Section title="Text" className="flex-col">
          <BaseInputGroup.Root>
            <BaseInputGroup.Addon>
              <BaseInputGroup.Text>$</BaseInputGroup.Text>
            </BaseInputGroup.Addon>

            <BaseInputGroup.Input placeholder="0.00" />

            <BaseInputGroup.Addon align="inline-end">
              <BaseInputGroup.Text>USD</BaseInputGroup.Text>
            </BaseInputGroup.Addon>
          </BaseInputGroup.Root>

          <BaseInputGroup.Root>
            <BaseInputGroup.Addon>
              <BaseInputGroup.Text>https://</BaseInputGroup.Text>
            </BaseInputGroup.Addon>

            <BaseInputGroup.Input
              placeholder="example.com"
              className="pl-0.5!"
            />

            <BaseInputGroup.Addon align="inline-end">
              <BaseInputGroup.Text>.com</BaseInputGroup.Text>
            </BaseInputGroup.Addon>
          </BaseInputGroup.Root>

          <BaseInputGroup.Root>
            <BaseInputGroup.Input placeholder="Enter your username" />

            <BaseInputGroup.Addon align="inline-end">
              <BaseInputGroup.Text>@company.com</BaseInputGroup.Text>
            </BaseInputGroup.Addon>
          </BaseInputGroup.Root>

          <BaseInputGroup.Root>
            <BaseInputGroup.Textarea placeholder="Enter your message" />

            <BaseInputGroup.Addon align="block-end">
              <BaseInputGroup.Text className="text-muted-foreground text-xs">
                120 characters left
              </BaseInputGroup.Text>
            </BaseInputGroup.Addon>
          </BaseInputGroup.Root>
        </Section>
      </div>
    </Container>
  );
}
