import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SessionWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  event?: EventWhereUniqueInput;
};
