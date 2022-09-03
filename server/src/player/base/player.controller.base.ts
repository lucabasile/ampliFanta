/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PlayerService } from "../player.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PlayerCreateInput } from "./PlayerCreateInput";
import { PlayerWhereInput } from "./PlayerWhereInput";
import { PlayerWhereUniqueInput } from "./PlayerWhereUniqueInput";
import { PlayerFindManyArgs } from "./PlayerFindManyArgs";
import { PlayerUpdateInput } from "./PlayerUpdateInput";
import { Player } from "./Player";
import { PerformanceFindManyArgs } from "../../performance/base/PerformanceFindManyArgs";
import { Performance } from "../../performance/base/Performance";
import { PerformanceWhereUniqueInput } from "../../performance/base/PerformanceWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PlayerControllerBase {
  constructor(
    protected readonly service: PlayerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Player })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: PlayerCreateInput): Promise<Player> {
    return await this.service.create({
      data: {
        ...data,

        team: data.team
          ? {
              connect: data.team,
            }
          : undefined,
      },
      select: {
        age: true,
        createdAt: true,
        id: true,
        name: true,

        team: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Player] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(PlayerFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Player[]> {
    const args = plainToClass(PlayerFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        age: true,
        createdAt: true,
        id: true,
        name: true,

        team: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Player | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        age: true,
        createdAt: true,
        id: true,
        name: true,

        team: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() data: PlayerUpdateInput
  ): Promise<Player | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          team: data.team
            ? {
                connect: data.team,
              }
            : undefined,
        },
        select: {
          age: true,
          createdAt: true,
          id: true,
          name: true,

          team: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Player | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          age: true,
          createdAt: true,
          id: true,
          name: true,

          team: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Performance",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/performances")
  @ApiNestedQuery(PerformanceFindManyArgs)
  async findManyPerformances(
    @common.Req() request: Request,
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Performance[]> {
    const query = plainToClass(PerformanceFindManyArgs, request.query);
    const results = await this.service.findPerformances(params.id, {
      ...query,
      select: {
        assists: true,
        createdAt: true,
        dayOfTheLeague: true,
        goals: true,
        id: true,
        penaltiesFailed: true,

        player: {
          select: {
            id: true,
          },
        },

        redCards: true,
        updatedAt: true,
        vote: true,
        yellowCards: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/performances")
  async connectPerformances(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PerformanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      performances: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/performances")
  async updatePerformances(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PerformanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      performances: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/performances")
  async disconnectPerformances(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PerformanceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      performances: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}