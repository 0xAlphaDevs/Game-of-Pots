export interface PotCardProps {
  id: string;
  amount: number;
  apy: number;
  usdeDeposits: number;
  maturityPeriod: number;
  maturityTimestamp: number;
  participants: number;
  maxParticipants: number;
  status: string;
  winner?: string;
}

export interface Pot {
  POT_SIZE_IN_USDE: bigint;
  TOTAL_SHARES: number;
  earnings: number;
  maturityPeriodInDays: number;
  maturityTimestamp: number;
  participants: string[];
  potId: number;
  status: number;
  totalUSDeDeposits: bigint;
  totalsUSDeShares: number;
  vrfRoundId: number;
  winner: string;
}

export interface MyPotProps {
  id: string;
  amount: number;
  apy: number;
  usdeDeposits: number;
  maturityPeriod: number;
  maturityTimestamp: number;
  participants: number;
  maxParticipants: number;
  status: string;
  winner?: string;
}
