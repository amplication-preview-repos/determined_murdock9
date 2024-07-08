import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";

export type VenueWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  capacity?: IntNullableFilter;
  name?: StringNullableFilter;
  events?: EventListRelationFilter;
};
