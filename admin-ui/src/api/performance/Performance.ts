import { Player } from "../player/Player";

export type Performance = {
  assists: number | null;
  createdAt: Date;
  dayOfTheLeague: number | null;
  goals: number | null;
  id: string;
  penaltiesFailed: number | null;
  player?: Player | null;
  redCards: number | null;
  updatedAt: Date;
  vote: number | null;
  yellowCards: number | null;
};
