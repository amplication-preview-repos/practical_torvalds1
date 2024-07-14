import { Injectable } from "@nestjs/common";
import { TransactionCreateDto } from "../transactionModule/TransactionCreateDto";
import { TransactionDto } from "../transactionModule/TransactionDto";

@Injectable()
export class TransactionModuleService {
  constructor() {}
  async CreateTransaction(args: TransactionCreateDto): Promise<TransactionDto> {
    throw new Error("Not implemented");
  }
  async GetTransactions(args: TransactionDto): Promise<TransactionDto[]> {
    throw new Error("Not implemented");
  }
}
