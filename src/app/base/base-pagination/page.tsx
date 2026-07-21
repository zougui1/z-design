import { ChevronLeft, ChevronRight } from "lucide-react";

import { BasePagination, Container, Typography } from "~/ui/components/base";
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

export default function BasePaginationPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BasePagination">
          <BasePagination.Root>
            <BasePagination.Content>
              <BasePagination.Item>
                <BasePagination.Button
                  aria-label="Go to previous page"
                  size="default"
                  className="pl-1.5!"
                >
                  <ChevronLeft
                    data-icon="inline-start"
                    className="cn-rtl-flip"
                  />
                  <span className="hidden sm:block">Previous</span>
                </BasePagination.Button>
              </BasePagination.Item>
              <BasePagination.Item>
                <BasePagination.Button>1</BasePagination.Button>
              </BasePagination.Item>
              <BasePagination.Item>
                <BasePagination.Button isActive>2</BasePagination.Button>
              </BasePagination.Item>
              <BasePagination.Item>
                <BasePagination.Button>3</BasePagination.Button>
              </BasePagination.Item>
              <BasePagination.Item>
                <BasePagination.Ellipsis />
              </BasePagination.Item>
              <BasePagination.Item>
                <BasePagination.Button
                  aria-label="Go to next page"
                  size="default"
                  className="pr-1.5!"
                >
                  <span className="hidden sm:block">Next</span>
                  <ChevronRight
                    data-icon="inline-end"
                    className="cn-rtl-flip"
                  />
                </BasePagination.Button>
              </BasePagination.Item>
            </BasePagination.Content>
          </BasePagination.Root>
        </Section>
      </div>
    </Container>
  );
}
