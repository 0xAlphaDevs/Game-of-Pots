import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Coins, Users } from 'lucide-react'
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
    <Card className="bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow">
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
              ${amount.toLocaleString()}
            </span>
          </div>
          <div className="text-emerald-600 font-medium">
            APY: {apy}%
          </div>
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span>Maturity: {maturityPeriod}</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span>
            Participants: {participants}/{maxParticipants}
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-emerald-500 h-2 rounded-full transition-all"
            style={{ width: `${(participants / maxParticipants) * 100}%` }}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => { }}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
          disabled={participants >= maxParticipants}
        >
          {participants >= maxParticipants ? 'Pot Full' : 'Join Pot'}
        </Button>
      </CardFooter>
    </Card>
  )
}

