import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PerformanceListRelationFilter } from "../performance/PerformanceListRelationFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type PlayerWhereInput = {
  age?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  performances?: PerformanceListRelationFilter;
  team?: TeamWhereUniqueInput;
};
