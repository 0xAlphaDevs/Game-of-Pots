"use client"

import { useEffect, useState } from "react"
import { PotCard } from "@/components/PotCard"
import { CreatePotModal } from "@/components/CreatePotModal"
import { useWriteContract, useReadContract } from "wagmi"
import { GOP_CONTRACT_ADDRESS } from "@/lib/contracts"
import { GOP_CONTRACT_ABI } from "@/lib/abi"

interface Pot {
  id: string;
  amount: number;
  apy: number;
  maturityPeriod: string;
  participants: number;
  maxParticipants: number;
}

const INITIAL_POTS: Pot[] = [
  {
    id: "001",
    amount: 5000,
    apy: 12.5,
    maturityPeriod: "30 days",
    participants: 3,
    maxParticipants: 10
  },
  {
    id: "002",
    amount: 10000,
    apy: 12.5,
    maturityPeriod: "60 days",
    participants: 5,
    maxParticipants: 10
  },
  {
    id: "003",
    amount: 15000,
    apy: 12.5,
    maturityPeriod: "90 days",
    participants: 10,
    maxParticipants: 10
  }
]

export default function AvailablePots() {
  const [pots, setPots] = useState<Pot[]>(INITIAL_POTS)
  const { writeContract } = useWriteContract();

  const handleDepositToPot = (potId: string) => {
    writeContract({
      address: GOP_CONTRACT_ADDRESS as `0x${string}`,
      abi: GOP_CONTRACT_ABI,
      functionName: "depositToPot",
      args: [potId, amount],
    });
  }

  //TO DO: when pot is fetched from the contract, we need to map it to the Pot interface on the basis of pot.status active or earning and differ the UI accordingly
  const { data: potData, isLoading } = useReadContract({
    address: GOP_CONTRACT_ADDRESS as `0x${string}`,
    abi: GOP_CONTRACT_ABI,
    functionName: "activePots",
  });

  useEffect(() => {
    if (potData) {
      console.log("POT DATA", potData);
      setPots(potData);
    }
  }, [potData])

  if (isLoading) {
    return <div>Loading Available Pots...</div>
  }

  return (
    <div className="px-4 md:px-20 py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Available Pots</h1>
          <p className="text-gray-600">Join an active pot to start earning rewards and participate in the game.</p>
        </div>
        <CreatePotModal />
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
          />
        ))}
      </div>
    </div>
  )
}

