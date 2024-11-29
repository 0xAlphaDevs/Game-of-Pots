"use client"

import { useAccount } from 'wagmi'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from '@/components/Navbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Coins, Trophy, ArrowLeftRight } from 'lucide-react'
import { ConnectKitButton } from 'connectkit'

const Home = () => {
  const { isConnected } = useAccount()

  const gameSteps = [
    { icon: <Coins className="w-6 h-6" />, title: "Deposit sUSDe", description: "Stake your sUSDe tokens in the Game of Pots vault." },
    { icon: <Trophy className="w-6 h-6" />, title: "Enter the Game", description: "Your deposit automatically enters you into the current game round." },
    { icon: <ArrowRight className="w-6 h-6" />, title: "Wait for Maturity", description: "Let your deposit grow until the vault reaches maturity." },
    { icon: <Coins className="w-6 h-6" />, title: "Claim Rewards", description: "If you win, claim your rewards along with your initial deposit." },
  ]

  const bridgeSteps = [
    { icon: <Coins className="w-6 h-6" />, title: "Get USDe on Sepolia", description: "Ensure you have USDe tokens on the Sepolia network." },
    { icon: <ArrowLeftRight className="w-6 h-6" />, title: "Use Ethena Bridge", description: "Go to the Ethena Bridge interface and connect your wallet." },
    { icon: <ArrowRight className="w-6 h-6" />, title: "Initiate Bridge", description: "Select 'USDe to sUSDe' and enter the amount you want to bridge." },
    { icon: <Coins className="w-6 h-6" />, title: "Confirm Transaction", description: "Approve the transaction and wait for it to be confirmed." },
  ]

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 ">
        <Card className="w-full max-w-md bg-white border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-green-800">Game of Pots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-center text-green-700">Connect your wallet to get started with Game of Pots</p>
              <div className="flex justify-center pt-4">
                <ConnectKitButton />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen text-green-900">
      <Navbar />
      <div className="container mx-auto lg:mx-24 px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Welcome to Game of Pots</h1>
        <Tabs defaultValue="play" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-green-100">
            <TabsTrigger value="play" className="data-[state=active]:bg-white data-[state=active]:text-green-800">How to Play</TabsTrigger>
            <TabsTrigger value="bridge" className="data-[state=active]:bg-white data-[state=active]:text-green-800">How to Bridge USDe</TabsTrigger>
          </TabsList>
          <TabsContent value="play">
            <Card className="bg-white border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">How to Play Game of Pots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {gameSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-full text-green-600">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-green-800">{step.title}</h3>
                        <p className="text-green-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="bridge">
            <Card className="bg-white border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">How to Bridge USDe from Sepolia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {bridgeSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-full text-green-600">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-green-800">{step.title}</h3>
                        <p className="text-green-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Home

