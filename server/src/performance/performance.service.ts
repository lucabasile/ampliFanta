import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PerformanceServiceBase } from "./base/performance.service.base";

@Injectable()
export class PerformanceService extends PerformanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
