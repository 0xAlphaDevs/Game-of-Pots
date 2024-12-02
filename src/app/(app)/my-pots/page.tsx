"use client";

import { Pot, PotCardProps } from "@/lib/types";
import { useReadContract, useAccount } from "wagmi";
import { GOP_CONTRACT_ADDRESS } from "@/lib/contracts";
import { GOP_CONTRACT_ABI } from "@/lib/abi";
import { useEffect, useState } from "react";
import { formatEther } from "viem";
import { MyPot } from "@/components/MyPot";

export default function MyPots() {
  const { address } = useAccount();
  const [pots, setPots] = useState<PotCardProps[]>([]);

  const { data: potData, isLoading } = useReadContract({
    address: GOP_CONTRACT_ADDRESS as `0x${string}`,
    abi: GOP_CONTRACT_ABI,
    functionName: "myPots",
    args: [address],
  });

  useEffect(() => {
    console.log("POT DATA", potData);

    const data: [] = potData as [];

    if (data)
      setPots(
        data.map((pot: Pot) => ({
          id: pot.potId.toString(),
          amount: Number(formatEther(pot.POT_SIZE_IN_USDE)),
          apy: 29,
          usdeDeposits: Number(formatEther(pot.totalUSDeDeposits)),
          maturityPeriod: Number(pot.maturityPeriodInDays),
          participants: pot.participants.length,
          maxParticipants: Number(pot.TOTAL_SHARES),
          winner: pot.winner,
          status:
            pot.status == 0
              ? "active"
              : pot.status == 1
              ? "earning"
              : "drawnWinner",
        }))
      );
  }, [potData]);

  if (isLoading) {
    return <div>Loading Available Pots...</div>;
  }

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
          <MyPot
            key={pot.id}
            id={pot.id}
            amount={pot.amount}
            apy={pot.apy}
            usdeDeposits={pot.usdeDeposits}
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
