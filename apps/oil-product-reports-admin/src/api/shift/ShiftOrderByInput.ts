import { SortOrder } from "../../util/SortOrder";

export type ShiftOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateTime?: SortOrder;
  smKey?: SortOrder;
};
