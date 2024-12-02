import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BadgeDollarSign,
  CircleDollarSignIcon,
  Clock,
  Coins,
  DollarSign,
  Hourglass,
  PiggyBank,
  Trophy,
  Users,
} from "lucide-react";
import { MyPotProps } from "@/lib/types";
import { GOP_CONTRACT_ADDRESS } from "@/lib/contracts";
import { GOP_CONTRACT_ABI } from "@/lib/abi";
import { useWriteContract } from "wagmi";
import { useEffect } from "react";
import toast from "react-hot-toast";

export function MyPot({
  id,
  amount,
  apy,
  usdeDeposits,
  maturityPeriod,
  maturityTimestamp,
  participants,
  maxParticipants,
  status,
  winner,
}: MyPotProps) {
  // const { address: owner } = useAccount();

  const {
    writeContract: handleWithdraw,
    isPending: withdrawPending,
    isSuccess: withdrawSuccess,
    isError: withdrawError,
  } = useWriteContract();

  const handleWithdrawFromPot = (potId: string) => {
    handleWithdraw({
      address: GOP_CONTRACT_ADDRESS as `0x${string}`,
      abi: GOP_CONTRACT_ABI,
      functionName: "withdrawFromPot",
      args: [potId],
    });
  };

  useEffect(() => {
    if (withdrawSuccess) {
      toast.success("Withdrawn from Pot Successfully");
    }
  }, [withdrawSuccess]);

  useEffect(() => {
    if (withdrawError) {
      toast.error("Error Withdrawing from Pot");
    }
  }, [withdrawError]);

  const rewards = (amount * apy) / (100 * maxParticipants);
  const daysRemaining =
    (maturityTimestamp - Math.floor(Date.now() / 1000)) / 86400;

  const estimatedEarnings =
    rewards * ((maturityPeriod - daysRemaining) / maturityPeriod);

  return (
    <Card className="bg-white border-gray-200 shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Pot #{id}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coins className="w-5 h-5 text-emerald-600" />
            <span className="text-2xl font-semibold text-gray-900">
              ${amount / maxParticipants} USDe
            </span>
          </div>
          <div className="flex flex-col">
            <div className=" text-xl font-medium">
              Rewards :{" "}
              <span className="text-emerald-600 font-semibold">
                {rewards} USDe
              </span>
            </div>
            <div className="text-md text-end">
              APY :{" "}
              <span className="font-semibold text-emerald-600">
                {((apy * 365) / maturityPeriod).toFixed(2)} %
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          <PiggyBank className="w-4 h-4 " />
          <span>Total Pot Size : {amount.toLocaleString()} USDe</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          <DollarSign className="w-4 h-4 " />
          <span>Pot TVL : {usdeDeposits.toLocaleString()} USDe</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          {status === "active" && (
            <>
              <Clock className="w-4 h-4" />
              <span>Maturity - {maturityPeriod} days</span>
            </>
          )}
          {status === "earning" && (
            <>
              <Hourglass className="w-4 h-4 text-red-600" />
              <span className="text-red-600 font-semibold">
                Time Left : {maturityPeriod} days
              </span>
            </>
          )}
          {status === "drawnWinner" && (
            <>
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span className="text-yellow-600 font-semibold">
                Winner - {winner}
              </span>
            </>
          )}
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          {status === "active" && (
            <>
              <Users className="w-4 h-4" />
              <span>
                Participants: {participants}/{maxParticipants}
              </span>
            </>
          )}
          {status === "earning" && (
            <>
              <BadgeDollarSign className="w-4 h-4 " />
              <span className="">
                USDe Rewards earned : {estimatedEarnings.toFixed(6)} USDe
              </span>
            </>
          )}
          {status === "drawnWinner" && (
            <>
              <CircleDollarSignIcon className="w-4 h-4 " />
              <span className="">
                Withdrawable Amount : {amount / maxParticipants} USDe
              </span>
            </>
          )}
        </div>

        {status !== "drawnWinner" && (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${
                status === "earning" ? "bg-emerald-500" : "bg-emerald-500"
              }`}
              style={{ width: `${(participants / maxParticipants) * 100}%` }}
              role="progressbar"
              aria-valuenow={(participants / maxParticipants) * 100}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        )}
      </CardContent>
      <CardFooter>
        {status !== "active" && (
          <Button
            className={`w-full text-white font-semibold ${
              status === "active"
                ? "bg-emerald-500 hover:bg-emerald-600"
                : status === "earning"
                ? "bg-emerald-900 hover:bg-emerald-900"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={status === "earning"}
            onClick={() => {
              if (status === "drawnWinner") {
                handleWithdrawFromPot(id);
              }
            }}
          >
            {status === "drawnWinner" && "Withdraw"}
            {status === "earning" && "Your Pot is earning USDe Rewards"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
