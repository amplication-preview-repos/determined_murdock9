import { SessionCreateNestedManyWithoutEventsInput } from "./SessionCreateNestedManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventCreateInput = {
  name?: string | null;
  description?: string | null;
  date?: Date | null;
  sessions?: SessionCreateNestedManyWithoutEventsInput;
  venue?: VenueWhereUniqueInput | null;
};
