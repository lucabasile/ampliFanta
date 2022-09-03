import { PlayerUpdateManyWithoutTeamsInput } from "./PlayerUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  name?: string | null;
  players?: PlayerUpdateManyWithoutTeamsInput;
};
