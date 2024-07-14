import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ShiftModuleService } from "./shiftmodule.service";
import { ShiftDto } from "../shiftModule/ShiftDto";

@swagger.ApiTags("shiftModules")
@common.Controller("shiftModules")
export class ShiftModuleController {
  constructor(protected readonly service: ShiftModuleService) {}

  @common.Post("/shift")
  @swagger.ApiOkResponse({
    type: ShiftDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateShift(
    @common.Body()
    body: ShiftDto
  ): Promise<ShiftDto> {
        return this.service.CreateShift(body);
      }

  @common.Get("/shifts")
  @swagger.ApiOkResponse({
    type: ShiftDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetShifts(
    @common.Body()
    body: ShiftDto
  ): Promise<ShiftDto[]> {
        return this.service.GetShifts(body);
      }
}
