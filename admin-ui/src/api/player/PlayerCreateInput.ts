import { PerformanceCreateNestedManyWithoutPlayersInput } from "./PerformanceCreateNestedManyWithoutPlayersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type PlayerCreateInput = {
  age?: number | null;
  name?: string | null;
  performances?: PerformanceCreateNestedManyWithoutPlayersInput;
  team?: TeamWhereUniqueInput | null;
};
