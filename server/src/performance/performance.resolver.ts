import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PerformanceResolverBase } from "./base/performance.resolver.base";
import { Performance } from "./base/Performance";
import { PerformanceService } from "./performance.service";

@graphql.Resolver(() => Performance)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PerformanceResolver extends PerformanceResolverBase {
  constructor(
    protected readonly service: PerformanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
