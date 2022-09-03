import { PlayerCreateNestedManyWithoutTeamsInput } from "./PlayerCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  name?: string | null;
  players?: PlayerCreateNestedManyWithoutTeamsInput;
};
