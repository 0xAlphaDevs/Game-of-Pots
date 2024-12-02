"use client";

import { PotCard } from "@/components/PotCard";
import { POTS } from "@/lib/pots";
import { PotCardProps } from "@/lib/types";
// import { useWriteContract, useReadContract, useAccount } from "wagmi"
// import { GOP_CONTRACT_ADDRESS } from "@/lib/contracts"
// import { GOP_CONTRACT_ABI } from "@/lib/abi"
import { useEffect, useState } from "react";

export default function MyPots() {
  const [pots, setPots] = useState<PotCardProps[]>([]);
  // const { address } = useAccount();
  // const { writeContract } = useWriteContract();

  // const handleSetPots = () => {
  //   setPots(pots);
  // };

  useEffect(() => {
    // filter only non-active pots
    const activePots = POTS.filter((pot) => pot.status !== "active");
    setPots(activePots);
  }, []);

  // const { data: potData, isLoading } = useReadContract({
  //   address: GOP_CONTRACT_ADDRESS as `0x${string}`,
  //   abi: GOP_CONTRACT_ABI,
  //   functionName: "myPots",
  //   args: [address],
  // });

  // const handleWithdrawFromPot = (potId: string) => {
  //   writeContract({
  //     address: GOP_CONTRACT_ADDRESS as `0x${string}`,
  //     abi: GOP_CONTRACT_ABI,
  //     functionName: "withdrawFromPot",
  //     args: [potId],
  //   });
  // }

  // const handleDrawPot = (potId: string) => {
  //   writeContract({
  //     address: GOP_CONTRACT_ADDRESS as `0x${string}`,
  //     abi: GOP_CONTRACT_ABI,
  //     functionName: "drawPot",
  //     args: [potId],
  //   });
  // }

  // useEffect(() => {
  //   if (potData) {
  //     console.log("POT DATA", potData);
  //     setPots(potData);
  //   }

  // }, [potData])

  // useEffect(() => {
  //   if (error) {
  //     toast.error("Error creating pot")
  //   }
  // }, [error]);

  // if (isLoading) {
  //   return <div>Loading My Pots...</div>
  // }

  return (
    <div className="px-4 md:px-20 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">My Pots</h1>
        <p className="text-gray-600">
          View your active pots and their current status.
        </p>
        {/* <button onClick={handleSetPots}>abs</button> */}
      </div>

      <div className="space-y-6 mx-auto">
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
