"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CreatePotModalProps {
  onCreatePot: (potData: {
    amount: number;
    apy: number;
    maturityPeriod: string;
    maxParticipants: number;
  }) => void;
}

export function CreatePotModal({ onCreatePot }: CreatePotModalProps) {
  const [amount, setAmount] = useState("")
  const [apy, setApy] = useState("")
  const [maturityPeriod, setMaturityPeriod] = useState("")
  const [maxParticipants, setMaxParticipants] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreatePot({
      amount: Number(amount),
      apy: Number(apy),
      maturityPeriod,
      maxParticipants: Number(maxParticipants),
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white mb-6 font-semibold"> + Create New Pot</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Pot</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="amount">Amount (USD)</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter pot amount"
              required
            />
          </div>
          <div>
            <Label htmlFor="apy">APY (%)</Label>
            <Input
              id="apy"
              type="number"
              value={apy}
              onChange={(e) => setApy(e.target.value)}
              placeholder="Enter APY"
              required
            />
          </div>
          <div>
            <Label htmlFor="maturityPeriod">Maturity Period</Label>
            <Input
              id="maturityPeriod"
              type="text"
              value={maturityPeriod}
              onChange={(e) => setMaturityPeriod(e.target.value)}
              placeholder="e.g., 30 days"
              required
            />
          </div>
          <div>
            <Label htmlFor="maxParticipants">Max Participants</Label>
            <Input
              id="maxParticipants"
              type="number"
              value={maxParticipants}
              onChange={(e) => setMaxParticipants(e.target.value)}
              placeholder="Enter max participants"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
            Create Pot
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

