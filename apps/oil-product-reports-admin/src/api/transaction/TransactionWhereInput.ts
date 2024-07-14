import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TransactionWhereInput = {
  id?: StringFilter;
  oilName?: StringNullableFilter;
  literPrice?: FloatNullableFilter;
  literDeliv?: FloatNullableFilter;
  amountDeliv?: FloatNullableFilter;
  amountLast?: FloatNullableFilter;
  oilLongName?: StringNullableFilter;
  typeField?: "Option1";
  source?: StringNullableFilter;
  literLast?: FloatNullableFilter;
};
