import { PerformanceUpdateManyWithoutPlayersInput } from "./PerformanceUpdateManyWithoutPlayersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type PlayerUpdateInput = {
  age?: number | null;
  name?: string | null;
  performances?: PerformanceUpdateManyWithoutPlayersInput;
  team?: TeamWhereUniqueInput | null;
};
