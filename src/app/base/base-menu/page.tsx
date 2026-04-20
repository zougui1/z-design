import { ChevronDown } from "lucide-react";

import {
  BaseButton,
  BaseMenu,
  Container,
  Typography,
} from "~/ui/components/base";
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

export default function BaseMenuPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Section title="BaseMenu">
          <BaseMenu.Root>
            <BaseMenu.Trigger render={<BaseButton />}>
              Open <ChevronDown className="-mr-1" />
            </BaseMenu.Trigger>

            <BaseMenu.Portal>
              <BaseMenu.Positioner>
                <BaseMenu.Popup>
                  <BaseMenu.Group>
                    <BaseMenu.GroupLabel>My Account</BaseMenu.GroupLabel>

                    <BaseMenu.Item>
                      Profile
                      <BaseMenu.Shortcut>⇧⌘P</BaseMenu.Shortcut>
                    </BaseMenu.Item>

                    <BaseMenu.Item>
                      Billing
                      <BaseMenu.Shortcut>⌘B</BaseMenu.Shortcut>
                    </BaseMenu.Item>

                    <BaseMenu.Item>
                      Settings
                      <BaseMenu.Shortcut>⌘S</BaseMenu.Shortcut>
                    </BaseMenu.Item>
                  </BaseMenu.Group>

                  <BaseMenu.Separator />

                  <BaseMenu.Group>
                    <BaseMenu.Item>Team</BaseMenu.Item>

                    <BaseMenu.SubRoot>
                      <BaseMenu.SubTrigger>
                        Invite users
                        <BaseMenu.SubTriggerIcon />
                      </BaseMenu.SubTrigger>

                      <BaseMenu.Portal>
                        <BaseMenu.SubPositioner>
                          <BaseMenu.Popup>
                            <BaseMenu.Item>Email</BaseMenu.Item>
                            <BaseMenu.Item>Message</BaseMenu.Item>

                            <BaseMenu.Separator />

                            <BaseMenu.Item>More...</BaseMenu.Item>
                          </BaseMenu.Popup>
                        </BaseMenu.SubPositioner>
                      </BaseMenu.Portal>
                    </BaseMenu.SubRoot>

                    <BaseMenu.Item>
                      New Team
                      <BaseMenu.Shortcut>⌘+T</BaseMenu.Shortcut>
                    </BaseMenu.Item>
                  </BaseMenu.Group>

                  <BaseMenu.Separator />

                  <BaseMenu.Group>
                    <BaseMenu.Item>Github</BaseMenu.Item>
                    <BaseMenu.Item>Support</BaseMenu.Item>

                    <BaseMenu.Item disabled>API</BaseMenu.Item>
                  </BaseMenu.Group>

                  <BaseMenu.Separator />

                  <BaseMenu.Group>
                    <BaseMenu.Item>
                      Log out
                      <BaseMenu.Shortcut>⇧⌘Q</BaseMenu.Shortcut>
                    </BaseMenu.Item>
                  </BaseMenu.Group>
                </BaseMenu.Popup>
              </BaseMenu.Positioner>
            </BaseMenu.Portal>
          </BaseMenu.Root>
        </Section>
      </div>
    </Container>
  );
}
