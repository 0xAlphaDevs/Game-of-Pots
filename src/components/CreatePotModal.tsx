"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"
import { useWriteContract } from "wagmi"
import { GOP_CONTRACT_ADDRESS } from "@/lib/contracts"
import { GOP_CONTRACT_ABI } from "@/lib/abi"
import { useRouter } from "next/navigation"

export function CreatePotModal() {
  const router = useRouter();
  const { writeContract, isSuccess } = useWriteContract();
  const [formData, setFormData] = useState({
    amount: 0,
    apy: 0,
    maturityPeriod: "",
    maxParticipants: 0,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("formData", formData)

    writeContract({
      address: GOP_CONTRACT_ADDRESS as `0x${string}`,
      abi: GOP_CONTRACT_ABI,
      functionName: "setUserProfile",
      args: [
        formData.amount,
        formData.apy,
        formData.maturityPeriod,
        formData.maxParticipants,
      ],
    });

    toast.success("Pot created successfully")
  }

  useEffect(() => {
    if (isSuccess) {
      router.push("/available-pots")
    }
  },
    [isSuccess, router])

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
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter pot amount"
              required
            />
          </div>
          <div>
            <Label htmlFor="apy">APY (%)</Label>
            <Input
              id="apy"
              type="number"
              value={formData.apy}
              onChange={handleChange}
              placeholder="Enter APY"
              required
            />
          </div>
          <div>
            <Label htmlFor="maturityPeriod">Maturity Period</Label>
            <Input
              id="maturityPeriod"
              type="text"
              value={formData.maturityPeriod}
              onChange={handleChange}
              placeholder="e.g., 30 days"
              required
            />
          </div>
          <div>
            <Label htmlFor="maxParticipants">Max Participants</Label>
            <Input
              id="maxParticipants"
              type="number"
              value={formData.maxParticipants}
              onChange={handleChange}
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

