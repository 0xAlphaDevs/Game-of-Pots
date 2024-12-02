"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { useWriteContract } from "wagmi";
import { GOP_CONTRACT_ADDRESS } from "@/lib/contracts";
import { GOP_CONTRACT_ABI } from "@/lib/abi";
import { useRouter } from "next/navigation";
import { differenceInDays } from "date-fns";
import Spinner from "./Spinner";
import { parseUnits } from "viem";

export function CreatePotModal() {
  const router = useRouter();
  const { writeContract, isSuccess, isPending, error } = useWriteContract();

  const [formData, setFormData] = useState({
    amount: "",
    totalShares: "",
    maturityDate: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const resetForm = () => {
    setFormData({
      amount: "",
      totalShares: "",
      maturityDate: "",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { amount, totalShares, maturityDate } = formData;

    if (!maturityDate || !totalShares || !amount) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const currentTimestamp = Math.floor(Date.now() / 1000); // Current time in seconds
    const selectedDate = new Date(maturityDate);
    const maturityPeriodInDays = differenceInDays(selectedDate, new Date());
    const maturityTimestamp =
      currentTimestamp + maturityPeriodInDays * 24 * 60 * 60; // Convert days to seconds

    writeContract({
      address: GOP_CONTRACT_ADDRESS as `0x${string}`,
      abi: GOP_CONTRACT_ABI,
      functionName: "createPot",
      args: [
        Number(parseUnits(amount, 18)),
        Number(totalShares),
        maturityTimestamp,
        maturityPeriodInDays,
      ],
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Pot created successfully");
      setIsDialogOpen(false); // Close the dialog
      resetForm(); // Reset the form fields
      router.push("/available-pots"); // Redirect to the Available Pots page
    }
  }, [isSuccess, router]);

  useEffect(() => {
    if (error) {
      toast.error("Error creating pot");
    }
  }, [error]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-emerald-500 hover:bg-emerald-600 text-white mb-6 font-semibold"
          onClick={() => setIsDialogOpen(true)}
        >
          + Create New Pot
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Pot</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isPending ? (
            <div className="flex items-center justify-center h-48">
              <Spinner />
            </div>
          ) : (
            <>
              <div>
                <Label htmlFor="amount">Amount (USDe)</Label>
                <Input
                  id="amount"
                  name="amount"
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
                <Label htmlFor="maturityDate">Maturity Date</Label>
                <Input
                  id="maturityDate"
                  name="maturityDate"
                  className="w-full"
                  type="date"
                  value={formData.maturityDate}
                  onChange={handleChange}
                  placeholder="Select maturity date"
                  required
                />
              </div>
            </>
          )}
          <Button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
            disabled={isPending}
          >
            {isPending ? "Creating Pot..." : "Create Pot"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
