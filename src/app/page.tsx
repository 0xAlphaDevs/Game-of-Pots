"use client"

import { useState } from "react"
import { ArrowRight, Trophy, Shield, Coins } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 pb-2">
            Game of Pots
          </h1>
          <p className="text-xl text-zinc-400">
            The first no-loss lottery powered by sUSDe rewards. Stake to earn, play to win, never lose your principal.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-200"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => router.push('/home')}
          >
            Launch App
            <ArrowRight className={`ml-2 transition-transform duration-200 ${isHovering ? 'translate-x-1' : ''}`} />
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <Card className="bg-zinc-800/50 border-zinc-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400">12.5%</div>
              <div className="text-zinc-400 mt-2">Current APY</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800/50 border-zinc-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400">$250K</div>
              <div className="text-zinc-400 mt-2">Total Value Locked</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800/50 border-zinc-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400">1.2M</div>
              <div className="text-zinc-400 mt-2">Prize Pool</div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Loss Guarantee</h3>
            <p className="text-zinc-400">Your principal is always safe and can be withdrawn at vault maturity</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <Coins className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Earn While You Play</h3>
            <p className="text-zinc-400">Earn sUSDe rewards even if you don&apos;t win the lottery</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Maturity Prizes</h3>
            <p className="text-zinc-400">Substantial prize pools from accumulated yields, claimable at vault maturity</p>
          </div>
        </div>
        <footer className=" text-zinc-400 fixed bottom-0 left-0 right-0 w-full bg-gradient-to-b from-zinc-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <p>&copy;<a href="https://www.alphadevs.dev/" target="_blank"> alphahdevs</a></p>
          </div>
        </footer>
      </div>
    </div>
  )
}

