"use client"

import { useAccount } from 'wagmi'
import { ConnectButton } from '@/components/ConnectButton'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from '@/components/navbar'

const Play = () => {
  const { isConnected } = useAccount()

  return (
    <div >
      {isConnected ? (
        <div className="space-y-4">
          <Navbar />
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center px-4">
          <Card className="w-full max-w-md bg-emerald-800/50 border-zinc-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Game of Pots</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-center text-zinc-100">Connect your wallet to get started with Game of Pots</p>
                <div className="flex justify-center pt-4">
                  <ConnectButton />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}


    </div>
  )
}

export default Play

