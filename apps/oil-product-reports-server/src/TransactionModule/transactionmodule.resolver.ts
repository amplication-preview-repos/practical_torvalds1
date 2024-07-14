import * as graphql from "@nestjs/graphql";
import { TransactionCreateDto } from "../transactionModule/TransactionCreateDto";
import { TransactionDto } from "../transactionModule/TransactionDto";
import { TransactionModuleService } from "./transactionmodule.service";

export class TransactionModuleResolver {
  constructor(protected readonly service: TransactionModuleService) {}

  @graphql.Mutation(() => TransactionDto)
  async CreateTransaction(
    @graphql.Args()
    args: TransactionCreateDto
  ): Promise<TransactionDto> {
    return this.service.CreateTransaction(args);
  }

  @graphql.Query(() => [TransactionDto])
  async GetTransactions(
    @graphql.Args()
    args: TransactionDto
  ): Promise<TransactionDto[]> {
    return this.service.GetTransactions(args);
  }
}
