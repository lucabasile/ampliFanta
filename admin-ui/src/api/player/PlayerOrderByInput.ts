import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
