import { Performance as TPerformance } from "../api/performance/Performance";

export const PERFORMANCE_TITLE_FIELD = "id";

export const PerformanceTitle = (record: TPerformance): string => {
  return record.id || record.id;
};
