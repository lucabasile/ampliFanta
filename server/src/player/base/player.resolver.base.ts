/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreatePlayerArgs } from "./CreatePlayerArgs";
import { UpdatePlayerArgs } from "./UpdatePlayerArgs";
import { DeletePlayerArgs } from "./DeletePlayerArgs";
import { PlayerFindManyArgs } from "./PlayerFindManyArgs";
import { PlayerFindUniqueArgs } from "./PlayerFindUniqueArgs";
import { Player } from "./Player";
import { PerformanceFindManyArgs } from "../../performance/base/PerformanceFindManyArgs";
import { Performance } from "../../performance/base/Performance";
import { Team } from "../../team/base/Team";
import { PlayerService } from "../player.service";

@graphql.Resolver(() => Player)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PlayerResolverBase {
  constructor(
    protected readonly service: PlayerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "any",
  })
  async _playersMeta(
    @graphql.Args() args: PlayerFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Player])
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "any",
  })
  async players(@graphql.Args() args: PlayerFindManyArgs): Promise<Player[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Player, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "own",
  })
  async player(
    @graphql.Args() args: PlayerFindUniqueArgs
  ): Promise<Player | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Player)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "create",
    possession: "any",
  })
  async createPlayer(@graphql.Args() args: CreatePlayerArgs): Promise<Player> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        team: args.data.team
          ? {
              connect: args.data.team,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Player)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "update",
    possession: "any",
  })
  async updatePlayer(
    @graphql.Args() args: UpdatePlayerArgs
  ): Promise<Player | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          team: args.data.team
            ? {
                connect: args.data.team,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Player)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "delete",
    possession: "any",
  })
  async deletePlayer(
    @graphql.Args() args: DeletePlayerArgs
  ): Promise<Player | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Performance])
  @nestAccessControl.UseRoles({
    resource: "Performance",
    action: "read",
    possession: "any",
  })
  async performances(
    @graphql.Parent() parent: Player,
    @graphql.Args() args: PerformanceFindManyArgs
  ): Promise<Performance[]> {
    const results = await this.service.findPerformances(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Team, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  async team(@graphql.Parent() parent: Player): Promise<Team | null> {
    const result = await this.service.getTeam(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}