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
  const { writeContract, isSuccess, isPending, error } = useWriteContract();
  const [formData, setFormData] = useState({
    amount: 0,
    totalShares: 0,
    maturityPeriodInDays: 0,
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

    const currentTimestamp = Math.floor(Date.now() / 1000); // Current time in seconds
    const maturityTimestamp = currentTimestamp + formData.maturityPeriodInDays * 24 * 60 * 60; // Add days in seconds

    console.log("maturityTimestamp", maturityTimestamp)

    writeContract({
      address: GOP_CONTRACT_ADDRESS as `0x${string}`,
      abi: GOP_CONTRACT_ABI,
      functionName: "createPot",
      args: [
        formData.amount,
        formData.totalShares,
        maturityTimestamp,
        formData.maturityPeriodInDays,
      ],
    });
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("Pot created successfully")
      router.push("/available-pots")
    }
  }, [isSuccess, router])

  // useEffect(() => {
  //   if (isPending) {
  //     toast.loading("Creating pot...")
  //   }
  // }, [isPending]);

  useEffect(() => {
    if (error) {
      toast.error(`Error creating pot: ${error.message || "Unknown error occurred"}`);
    }
  }, [error]);

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
          {isPending ? (
            <p>Creating pot...</p>
          ) : (
            <>
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
                <Label htmlFor="totalShares">Total Shares</Label>
                <Input
                  id="totalShares"
                  name="totalShares"
                  type="number"
                  value={formData.totalShares}
                  onChange={handleChange}
                  placeholder="Enter total shares"
                  required
                />
              </div>
              <div>
                <Label htmlFor="maturityPeriodInDays">Maturity Period (days)</Label>
                <Input
                  id="maturityPeriodInDays"
                  name="maturityPeriodInDays"
                  type="number"
                  value={formData.maturityPeriodInDays}
                  onChange={handleChange}
                  placeholder="Enter maturity period in days"
                  required
                />
              </div>
            </>
          )}
          <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" disabled={isPending}>
            {isPending ? "Creating Pot..." : "Create Pot"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

