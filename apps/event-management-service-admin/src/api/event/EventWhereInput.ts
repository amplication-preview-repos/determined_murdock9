import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  sessions?: SessionListRelationFilter;
  venue?: VenueWhereUniqueInput;
};
