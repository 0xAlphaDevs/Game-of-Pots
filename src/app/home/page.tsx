"use client";

import { useAccount } from "wagmi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { ArrowRight, Coins, Trophy } from "lucide-react";
import { ConnectKitButton } from "connectkit";

const Home = () => {
  const { isConnected } = useAccount();

  const gameSteps = [
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Get USDe",
      description: (
        <>
          Get USDe from the{" "}
          <a
            href="https://faucet.ethena.fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline hover:text-green-800"
          >
            faucet
          </a>
          .
        </>
      ),
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Enter the Game",
      description: "Select a pot and deposit your USDe.",
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Wait for Maturity",
      description: "Let your deposit grow until the pot reaches maturity.",
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Withdraw Rewards",
      description:
        "If you win, withdraw your rewards along with your initial deposit.",
    },
  ];

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 ">
        <Card className="w-full max-w-md bg-white border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-green-800">
              Game of Pots
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-center text-green-700">
                Connect your wallet to get started with Game of Pots
              </p>
              <div className="flex justify-center pt-4">
                <ConnectKitButton />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-green-900">
      <Navbar />
      <div className="mx-28 px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-800">
          Welcome to Game of Pots
        </h1>

        <Card className="bg-white border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">
              How to Play Game of Pots
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {gameSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-green-800">
                      {step.title}
                    </h3>
                    <p className="text-green-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
