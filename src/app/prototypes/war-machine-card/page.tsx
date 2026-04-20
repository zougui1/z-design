import { Container } from "~/ui/components/base";

//import { WarMachineCard } from "./_WarMachineCard";

export default function HomePage() {
  return (
    <Container className="flex flex-col gap-8">
      <div
        className="grid auto-rows-[130px] grid-cols-[repeat(auto-fit,130px)]
          gap-6"
      >
        {/*<WarMachineCard name="cloudfist" />
        <WarMachineCard name="earthshatterer" />
        <WarMachineCard name="sentinel" />
        <WarMachineCard name="judgement" />
        <WarMachineCard name="talos" />
        <WarMachineCard name="hunter" />
        <WarMachineCard name="fortress" />
        <WarMachineCard name="goliath" />
        <WarMachineCard name="thunderclap" />
        <WarMachineCard name="firecracker" />
        <WarMachineCard name="aegis" />
        <WarMachineCard name="curator" />
        <WarMachineCard name="harvester" />*/}
      </div>
    </Container>
  );
}
