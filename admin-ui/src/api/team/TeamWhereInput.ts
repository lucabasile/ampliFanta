import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlayerListRelationFilter } from "../player/PlayerListRelationFilter";

export type TeamWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  players?: PlayerListRelationFilter;
};
