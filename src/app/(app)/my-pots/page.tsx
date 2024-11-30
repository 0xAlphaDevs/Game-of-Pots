"use client"

import { PotCard } from "@/components/PotCard"
import { useWriteContract, useReadContract, useAccount } from "wagmi"
import { GOP_CONTRACT_ADDRESS } from "@/lib/contracts"
import { GOP_CONTRACT_ABI } from "@/lib/abi"
import { useEffect } from "react"

interface Pot {
  id: string;
  amount: number;
  apy: number;
  maturityPeriod: string;
  participants: number;
  maxParticipants: number;
}

const POTS: Pot[] = [
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

export default function MyPots() {
  const [pots, setPots] = useState<Pot[]>(POTS)
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const { data: potData, isLoading } = useReadContract({
    address: GOP_CONTRACT_ADDRESS as `0x${string}`,
    abi: GOP_CONTRACT_ABI,
    functionName: "myPots",
    args: [address],
  });

  const handleWithdrawFromPot = (potId: string) => {
    writeContract({
      address: GOP_CONTRACT_ADDRESS as `0x${string}`,
      abi: GOP_CONTRACT_ABI,
      functionName: "withdrawFromPot",
      args: [potId],
    });
  }

  const handleDrawPot = (potId: string) => {
    writeContract({
      address: GOP_CONTRACT_ADDRESS as `0x${string}`,
      abi: GOP_CONTRACT_ABI,
      functionName: "drawPot",
      args: [potId],
    });
  }

  useEffect(() => {
    if (potData) {
      console.log("POT DATA", potData);
      setPots(potData);
    }

  }, [potData])

  if (isLoading) {
    return <div>Loading My Pots...</div>
  }

  return (
    <div className="px-4 md:px-20 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">My Pots</h1>
        <p className="text-gray-600">View your active pots and their current status.</p>
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
          />
        ))}
      </div>
    </div>
  )
}

