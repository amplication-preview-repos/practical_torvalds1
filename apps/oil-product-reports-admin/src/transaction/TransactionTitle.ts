import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "oilName";

export const TransactionTitle = (record: TTransaction): string => {
  return record.oilName?.toString() || String(record.id);
};
