import { SortOrder } from "../../util/SortOrder";

export type PerformanceOrderByInput = {
  assists?: SortOrder;
  createdAt?: SortOrder;
  dayOfTheLeague?: SortOrder;
  goals?: SortOrder;
  id?: SortOrder;
  penaltiesFailed?: SortOrder;
  playerId?: SortOrder;
  redCards?: SortOrder;
  updatedAt?: SortOrder;
  vote?: SortOrder;
  yellowCards?: SortOrder;
};
