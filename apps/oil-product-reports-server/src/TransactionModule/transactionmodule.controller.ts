import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TransactionModuleService } from "./transactionmodule.service";
import { TransactionDto } from "../transactionModule/TransactionDto";

@swagger.ApiTags("transactionModules")
@common.Controller("transactionModules")
export class TransactionModuleController {
  constructor(protected readonly service: TransactionModuleService) {}

  @common.Post("/transaction")
  @swagger.ApiOkResponse({
    type: TransactionDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateTransaction(
    @common.Body()
    body: TransactionDto
  ): Promise<TransactionDto> {
        return this.service.CreateTransaction(body);
      }

  @common.Get("/transactions")
  @swagger.ApiOkResponse({
    type: TransactionDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTransactions(
    @common.Body()
    body: TransactionDto
  ): Promise<TransactionDto[]> {
        return this.service.GetTransactions(body);
      }
}
