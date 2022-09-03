import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PerformanceCreateInput = {
  assists?: number | null;
  dayOfTheLeague?: number | null;
  goals?: number | null;
  penaltiesFailed?: number | null;
  player?: PlayerWhereUniqueInput | null;
  redCards?: number | null;
  vote?: number | null;
  yellowCards?: number | null;
};
