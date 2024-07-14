import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ShiftWhereInput = {
  id?: StringFilter;
  dateTime?: DateTimeNullableFilter;
  smKey?: IntNullableFilter;
};
