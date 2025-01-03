"use client";

import { useEffect, useState } from "react";
import { PotCard } from "@/components/PotCard";
import { CreatePotModal } from "@/components/CreatePotModal";
import { Pot, PotCardProps } from "@/lib/types";
import { GOP_CONTRACT_ADDRESS } from "@/lib/contracts";
import { useReadContract } from "wagmi";
import { GOP_CONTRACT_ABI } from "@/lib/abi";
import { formatEther } from "viem";
import PotCardSkeleton from "@/components/PotCardSkeleton";
import toast from "react-hot-toast";

export default function AvailablePots() {
  const [pots, setPots] = useState<PotCardProps[]>([]);
  const {
    data: availablePotData,
    isLoading: availablePotLoading,
    isError: availablePotError,
  } = useReadContract({
    address: GOP_CONTRACT_ADDRESS as `0x${string}`,
    abi: GOP_CONTRACT_ABI,
    functionName: "activePots",
  });

  useEffect(() => {
    console.log("POT DATA", availablePotData);
    // setPots(availablePotData);
    const data: [] = availablePotData as [];

    if (data)
      setPots(
        data.map((pot: Pot) => ({
          id: pot.potId.toString(),
          amount: Number(formatEther(pot.POT_SIZE_IN_USDE)),
          apy: 29,
          usdeDeposits: Number(formatEther(pot.totalUSDeDeposits)),
          maturityPeriod: Number(pot.maturityPeriodInDays),
          maturityTimestamp: Number(pot.maturityTimestamp),
          participants: pot.participants.length,
          maxParticipants: Number(pot.TOTAL_SHARES),
          status:
            pot.status == 0
              ? "active"
              : pot.status == 1
              ? "earning"
              : "drawnWinner",
        }))
      );
  }, [availablePotData]);

  useEffect(() => {
    if (availablePotError) {
      toast.error("Error fetching available pots");
    }
  }, [availablePotError]);

  if (availablePotLoading) {
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PotCardSkeleton />
          <PotCardSkeleton />
        </div>
      </div>
    );
  }

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
      </div>

      {pots.length === 0 ? (
        <div className="flex justify-center items-center pt-28">
          <p className="text-xl text-gray-600 font-semibold">
            ❌ No pots have been created yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pots.map((pot) => (
            <PotCard
              key={pot.id}
              id={pot.id}
              amount={pot.amount}
              apy={pot.apy}
              usdeDeposits={pot.usdeDeposits}
              maturityPeriod={pot.maturityPeriod}
              maturityTimestamp={pot.maturityTimestamp}
              participants={pot.participants}
              maxParticipants={pot.maxParticipants}
              status={pot.status}
              winner={pot.winner}
            />
          ))}
        </div>
      )}
    </div>
  );
}
