"use client";

import { useState } from "react";
import { PotCard } from "@/components/PotCard";
import { CreatePotModal } from "@/components/CreatePotModal";
// import { useWriteContract, useReadContract } from "wagmi"
// import { GOP_CONTRACT_ADDRESS } from "@/lib/contracts"
// import { GOP_CONTRACT_ABI } from "@/lib/abi"
import { POTS } from "@/lib/pots";
import { PotCardProps } from "@/lib/types";

export default function AvailablePots() {
  const [pots, setPots] = useState<PotCardProps[]>(POTS);
  const handleSetPots = () => {
    setPots(pots);
  };
  // const { writeContract } = useWriteContract();

  // const handleDepositToPot = (potId: string) => {
  //   writeContract({
  //     address: GOP_CONTRACT_ADDRESS as `0x${string}`,
  //     abi: GOP_CONTRACT_ABI,
  //     functionName: "depositToPot",
  //     args: [potId, amount],
  //   });
  // }

  // const { data: potData, isLoading } = useReadContract({
  //   address: GOP_CONTRACT_ADDRESS as `0x${string}`,
  //   abi: GOP_CONTRACT_ABI,
  //   functionName: "activePots",
  // });

  // useEffect(() => {
  //   if (potData) {
  //     console.log("POT DATA", potData);
  //     setPots(potData);
  //   }
  // }, [potData])

  // if (isLoading) {
  //   return <div>Loading Available Pots...</div>
  // }

  // useEffect(() => {
  //   if (error) {
  //     toast.error("Error creating pot")
  //   }
  // }, [error]);

  return (
    <div className="px-4 md:px-20 py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Available Pots
          </h1>
          <p className="text-gray-600">
            Join an active pot to start earning rewards and participate in the
            game.
          </p>
        </div>
        <CreatePotModal />
        <button onClick={handleSetPots}></button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pots.map((pot) => (
          <PotCard
            key={pot.id}
            id={pot.id}
            amount={pot.amount}
            apy={pot.apy}
            maturityPeriod={pot.maturityPeriod}
            participants={pot.participants}
            maxParticipants={pot.maxParticipants}
            status={pot.status}
          />
        ))}
      </div>
    </div>
  );
}
