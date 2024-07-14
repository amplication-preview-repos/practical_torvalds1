import { Injectable } from "@nestjs/common";
import { ShiftCreateDto } from "../shiftModule/ShiftCreateDto";
import { ShiftDto } from "../shiftModule/ShiftDto";

@Injectable()
export class ShiftModuleService {
  constructor() {}
  async CreateShift(args: ShiftCreateDto): Promise<ShiftDto> {
    throw new Error("Not implemented");
  }
  async GetShifts(args: ShiftDto): Promise<ShiftDto[]> {
    throw new Error("Not implemented");
  }
}
