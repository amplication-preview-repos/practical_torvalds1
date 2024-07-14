import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  oilName?: SortOrder;
  literPrice?: SortOrder;
  literDeliv?: SortOrder;
  amountDeliv?: SortOrder;
  amountLast?: SortOrder;
  oilLongName?: SortOrder;
  typeField?: SortOrder;
  source?: SortOrder;
  literLast?: SortOrder;
};
