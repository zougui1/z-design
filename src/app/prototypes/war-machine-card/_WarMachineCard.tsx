"use client";

import { useState } from "react";
import { type VariantProps, tv } from "tailwind-variants";

import { InputGroup, NumberField } from "~/ui/components/base";
import { cn } from "~/ui/utils";

const rarityVariants = tv({
  base: "relative transition-colors cursor-pointer place-content-between rounded-sm select-none",

  variants: {
    rarity: {
      locked: "bg-rarity-locked text-white opacity-40",
      common: "bg-rarity-common text-white",
      uncommon: "bg-rarity-uncommon text-white",
      rare: "bg-rarity-rare text-white",
      epic: "bg-rarity-epic text-white",
      legendary: "bg-rarity-legendary text-white",
      mythic: "bg-rarity-mythic text-white",
      titan: "bg-rarity-titan text-white",
      angel: "bg-rarity-angel text-white",
    },
  },

  defaultVariants: {
    rarity: "common",
  },
});

type Rarity = Exclude<
  NonNullable<VariantProps<typeof rarityVariants>["rarity"]>,
  "locked"
>;

const rarityMap = {
  toLevel: {
    common: 0,
    uncommon: 1,
    rare: 2,
    epic: 3,
    legendary: 4,
    mythic: 5,
    titan: 6,
    angel: 7,
  } satisfies Record<Rarity, number>,

  fromLevel: {
    0: "common",
    1: "uncommon",
    2: "rare",
    3: "epic",
    4: "legendary",
    5: "mythic",
    6: "titan",
    7: "angel",
  } satisfies Record<number, Rarity>,
};

interface BadgeInputProps extends NumberField.RootProps {
  label: React.ReactNode;
}

const BadgeInput = ({ label, className, ...props }: BadgeInputProps) => {
  return (
    <InputGroup.Root
      className={cn("bg-background-light/70 h-auto rounded-full", className)}
    >
      <InputGroup.Addon
        className={cn(
          "py-0.5 text-white",
          typeof label === "string" ? "pl-1.5" : "pl-1",
        )}
      >
        {label}
      </InputGroup.Addon>

      <NumberField.Root largeStep={5} defaultValue={0} {...props}>
        <InputGroup.Input
          className="w-[4ch] px-1 py-0"
          render={<NumberField.Input id="level" />}
        />
      </NumberField.Root>
    </InputGroup.Root>
  );
};

export const WarMachineCard = ({ name }: { name: string }) => {
  const [rarity, setRarity] = useState<Rarity>("common");

  return (
    <div className={rarityVariants({ rarity })}>
      <img
        className="absolute inset-0 p-3"
        src={`/firestone/war-machines/${name}.webp`}
        alt={name}
      />

      <div className="flex justify-between gap-2 p-0.5">
        <div className="flex flex-col gap-2">
          <BadgeInput label="L" />

          <BadgeInput
            label="R"
            value={rarityMap.toLevel[rarity]}
            onValueChange={(value) => {
              if (value !== null && value in rarityMap.fromLevel) {
                setRarity(
                  rarityMap.fromLevel[
                    value as keyof typeof rarityMap.fromLevel
                  ],
                );
              }
            }}
          />

          <BadgeInput
            label={
              <img
                className="h-5 min-w-5 object-contain"
                src="/firestone/SacredCards.webp"
                alt="sacred cardds"
              />
            }
          />

          <BadgeInput
            label={
              <img
                className="h-5 min-w-5 object-contain"
                src="/firestone/LostInscription.webp"
                alt="lost inscription"
              />
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <BadgeInput
            label={
              <img
                className="h-5 min-w-5 object-contain"
                src="/firestone/WarMachineAttackIcon.webp"
                alt="attack"
              />
            }
          />

          <BadgeInput
            className="justify-self-center"
            label={
              <img
                className="h-5 min-w-5 object-contain"
                src="/firestone/WarMachineHealthIcon.webp"
                alt="health"
              />
            }
          />

          <BadgeInput
            className="justify-self-end"
            label={
              <img
                className="h-5 min-w-5 object-contain"
                src="/firestone/WarMachineArmorIcon.webp"
                alt="armor"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};
export const WarMachineCard2 = ({ name }: { name: string }) => {
  const BadgeInput = ({ label, className, ...props }: BadgeInputProps) => {
    return (
      <InputGroup.Root
        className={cn(
          "bg-background-light/70 h-auto w-[5ch] rounded-full",
          className,
        )}
      >
        <InputGroup.Addon
          className={cn(
            "py-0.5 text-white",
            typeof label === "string" ? "pl-1.5" : "pl-1",
          )}
        >
          {label}
        </InputGroup.Addon>

        <NumberField.Root largeStep={5} defaultValue={0} {...props}>
          <InputGroup.Input
            className="px-0.5 py-0"
            render={<NumberField.Input id="level" />}
          />
        </NumberField.Root>
      </InputGroup.Root>
    );
  };

  const [rarity, setRarity] = useState<Rarity>("common");

  return (
    <div className={rarityVariants({ rarity })}>
      <img
        className="absolute inset-0 p-3"
        src={`/firestone/war-machines/${name}.webp`}
        alt={name}
      />

      <div className="flex h-full flex-col justify-between p-0.5">
        <div
          className="grid grid-cols-2 justify-between gap-1
            *:even:justify-self-end"
        >
          <BadgeInput label="L" />

          <BadgeInput
            label="R"
            value={rarityMap.toLevel[rarity]}
            onValueChange={(value) => {
              if (value !== null && value in rarityMap.fromLevel) {
                setRarity(
                  rarityMap.fromLevel[
                    value as keyof typeof rarityMap.fromLevel
                  ],
                );
              }
            }}
          />

          <BadgeInput
            label={
              <img
                className="h-5 min-w-3.5 object-contain"
                src="/firestone/SacredCards.webp"
                alt="sacred cardds"
              />
            }
          />

          <BadgeInput
            label={
              <img
                className="h-5 min-w-3.5 object-contain"
                src="/firestone/LostInscription.webp"
                alt="lost inscription"
              />
            }
          />
        </div>

        <div className="grid grid-cols-3 gap-1">
          <BadgeInput
            label={
              <img
                className="h-5 min-w-3.5 object-contain"
                src="/firestone/WarMachineAttackIcon.webp"
                alt="attack"
              />
            }
          />

          <BadgeInput
            className="justify-self-center"
            label={
              <img
                className="h-5 min-w-3.5 object-contain"
                src="/firestone/WarMachineHealthIcon.webp"
                alt="health"
              />
            }
          />

          <BadgeInput
            className="justify-self-end"
            label={
              <img
                className="h-5 min-w-3.5 object-contain"
                src="/firestone/WarMachineArmorIcon.webp"
                alt="armor"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};
