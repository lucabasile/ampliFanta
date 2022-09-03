import { PerformanceWhereInput } from "./PerformanceWhereInput";
import { PerformanceOrderByInput } from "./PerformanceOrderByInput";

export type PerformanceFindManyArgs = {
  where?: PerformanceWhereInput;
  orderBy?: Array<PerformanceOrderByInput>;
  skip?: number;
  take?: number;
};
