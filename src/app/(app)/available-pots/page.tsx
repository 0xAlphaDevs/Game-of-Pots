"use client"

import { useState } from "react"
import { PotCard } from "@/components/PotCard"
import { CreatePotModal } from "@/components/CreatePotModal"

interface Pot {
  id: string;
  amount: number;
  apy: number;
  maturityPeriod: string;
  participants: number;
  maxParticipants: number;
}

// This would come from your API/contract in a real implementation
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

  const handleJoinPot = (potId: string) => {
    // This would handle the pot joining logic in a real implementation
    console.log(`Joining pot ${potId}`)
  }

  const handleCreatePot = (potData: Omit<Pot, 'id' | 'participants'>) => {
    const newPot: Pot = {
      ...potData,
      id: `00${pots.length + 1}`,
      participants: 0,
    }
    setPots([...pots, newPot])
  }

  return (
    <div className="px-4 md:px-20 py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Available Pots</h1>
          <p className="text-gray-600">Join an active pot to start earning rewards and participate in the game.</p>
        </div>
        <CreatePotModal onCreatePot={handleCreatePot} />
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
            onJoin={handleJoinPot}
          />
        ))}
      </div>
    </div>
  )
}

