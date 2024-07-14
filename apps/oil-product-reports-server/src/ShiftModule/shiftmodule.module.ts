import { Module } from "@nestjs/common";
import { ShiftModuleService } from "./shiftmodule.service";
import { ShiftModuleController } from "./shiftmodule.controller";
import { ShiftModuleResolver } from "./shiftmodule.resolver";

@Module({
  controllers: [ShiftModuleController],
  providers: [ShiftModuleService, ShiftModuleResolver],
  exports: [ShiftModuleService],
})
export class ShiftModuleModule {}
