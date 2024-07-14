import * as graphql from "@nestjs/graphql";
import { ShiftCreateDto } from "../shiftModule/ShiftCreateDto";
import { ShiftDto } from "../shiftModule/ShiftDto";
import { ShiftModuleService } from "./shiftmodule.service";

export class ShiftModuleResolver {
  constructor(protected readonly service: ShiftModuleService) {}

  @graphql.Mutation(() => ShiftDto)
  async CreateShift(
    @graphql.Args()
    args: ShiftCreateDto
  ): Promise<ShiftDto> {
    return this.service.CreateShift(args);
  }

  @graphql.Query(() => [ShiftDto])
  async GetShifts(
    @graphql.Args()
    args: ShiftDto
  ): Promise<ShiftDto[]> {
    return this.service.GetShifts(args);
  }
}
