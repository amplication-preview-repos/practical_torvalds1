import { Module } from "@nestjs/common";
import { TransactionModuleService } from "./transactionmodule.service";
import { TransactionModuleController } from "./transactionmodule.controller";
import { TransactionModuleResolver } from "./transactionmodule.resolver";

@Module({
  controllers: [TransactionModuleController],
  providers: [TransactionModuleService, TransactionModuleResolver],
  exports: [TransactionModuleService],
})
export class TransactionModuleModule {}
