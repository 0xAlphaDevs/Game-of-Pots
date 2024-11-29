"use client"

import { PotCard } from "@/components/PotCard"

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
  const handleJoinPot = (potId: string) => {
    // This would handle the pot joining logic in a real implementation
    console.log(`Joining pot ${potId}`)
  }

  return (
    <div className="px-4 md:px-20 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">My Pots</h1>
        <p className="text-gray-600">View your active pots and their current status.</p>
      </div>

      <div className="space-y-6 mx-auto">
        {POTS.map((pot) => (
          <PotCard
            key={pot.id}
            id={pot.id}
            amount={pot.amount}
            apy={pot.apy}
            maturityPeriod={pot.maturityPeriod}
            participants={pot.participants}
            maxParticipants={pot.maxParticipants}
            onJoin={handleJoinPot}
          />
        ))}
      </div>
    </div>
  )
}

