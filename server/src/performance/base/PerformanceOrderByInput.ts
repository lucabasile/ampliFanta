/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SortOrder } from "../../util/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
class PerformanceOrderByInput {
  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  assists?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  dayOfTheLeague?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  goals?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  penaltiesFailed?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  playerId?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  redCards?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  vote?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  yellowCards?: SortOrder;
}

export { PerformanceOrderByInput };