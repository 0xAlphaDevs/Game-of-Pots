import { PotCardProps } from "./types";

export const POTS: PotCardProps[] = [
  {
    id: "001",
    amount: 5000,
    apy: 12.5,
    maturityPeriod: "30 days",
    participants: 3,
    maxParticipants: 10,
    status: "active",
  },
  {
    id: "002",
    amount: 10000,
    apy: 12.5,
    maturityPeriod: "60 days",
    participants: 5,
    maxParticipants: 10,
    status: "earning",
  },
  {
    id: "003",
    amount: 15000,
    apy: 12.5,
    maturityPeriod: "90 days",
    participants: 10,
    maxParticipants: 10,
    status: "drawnWinner",
  },
];
