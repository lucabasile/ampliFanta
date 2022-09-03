import { Performance } from "../performance/Performance";
import { Team } from "../team/Team";

export type Player = {
  age: number | null;
  createdAt: Date;
  id: string;
  name: string | null;
  performances?: Array<Performance>;
  team?: Team | null;
  updatedAt: Date;
};
