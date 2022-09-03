import { Player } from "../player/Player";

export type Team = {
  createdAt: Date;
  id: string;
  name: string | null;
  players?: Array<Player>;
  updatedAt: Date;
};
