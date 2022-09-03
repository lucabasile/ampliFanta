import { Module } from "@nestjs/common";
import { PerformanceModuleBase } from "./base/performance.module.base";
import { PerformanceService } from "./performance.service";
import { PerformanceController } from "./performance.controller";
import { PerformanceResolver } from "./performance.resolver";

@Module({
  imports: [PerformanceModuleBase],
  controllers: [PerformanceController],
  providers: [PerformanceService, PerformanceResolver],
  exports: [PerformanceService],
})
export class PerformanceModule {}
