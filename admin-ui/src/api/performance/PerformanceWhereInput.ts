import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PerformanceWhereInput = {
  assists?: IntNullableFilter;
  dayOfTheLeague?: IntNullableFilter;
  goals?: IntNullableFilter;
  id?: StringFilter;
  penaltiesFailed?: IntNullableFilter;
  player?: PlayerWhereUniqueInput;
  redCards?: IntNullableFilter;
  vote?: FloatNullableFilter;
  yellowCards?: IntNullableFilter;
};
