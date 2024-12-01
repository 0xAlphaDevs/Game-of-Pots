import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleDollarSignIcon, Clock, Coins, Hourglass, Percent, Trophy, Users } from 'lucide-react'
import { PotCardProps } from "@/lib/types"

export function PotCard({
  id,
  amount,
  apy,
  maturityPeriod,
  participants,
  maxParticipants,
  status
}: PotCardProps) {
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
            <span className="text-lg font-semibold text-gray-900">
              ${amount.toLocaleString()} (Price per share - $0.01)
            </span>
          </div>
          <div className="text-emerald-600 font-medium">
            APY: {apy}%
          </div>
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          {status === 'active' && (
            <>
              <Clock className="w-4 h-4" />
              <span>Maturity - {maturityPeriod}</span>
            </>
          )}
          {status === 'earning' && (
            <>
              <Hourglass className="w-4 h-4 text-red-600" />
              <span className="text-red-600 font-semibold">Time Left - {maturityPeriod}</span>
            </>

          )}
          {status === 'drawnWinner' && (
            <>
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span className="text-yellow-600 font-semibold">Winner - {maturityPeriod}</span>
            </>
          )}
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          {status === 'active' && (
            <>
              <Users className="w-4 h-4" />
              <span>
                Participants: {participants}/{maxParticipants}
              </span>
            </>
          )}
          {status === 'earning' && (
            <>
              <Percent className="w-4 h-4 " />
              <span className="">Estimated Pot Earnings - {maturityPeriod}</span>
            </>
          )}
          {status === 'drawnWinner' && (
            <>
              <CircleDollarSignIcon className="w-4 h-4 " />
              <span className="">Withdrawable Amount - {maturityPeriod}</span>
            </>
          )}
        </div>

        {status !== 'drawnWinner' && (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${status === 'earning' ? 'bg-emerald-500' : 'bg-emerald-500'
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
        <Button
          onClick={() => { }}
          className={`w-full text-white font-semibold ${status === 'active'
            ? 'bg-emerald-500 hover:bg-emerald-600'
            : status === 'earning'
              ? 'bg-emerald-900 hover:bg-emerald-900'
              : 'bg-blue-500 hover:bg-blue-600'
            }`}
          disabled={status === 'earning'}
        >
          {status === 'active' && 'Join Pot'}
          {status === 'earning' && 'Pot Full'}
          {status === 'drawnWinner' && 'Withdraw'}
        </Button>
      </CardFooter>
    </Card>
  )
}

