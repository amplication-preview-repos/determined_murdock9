import { SessionUpdateManyWithoutEventsInput } from "./SessionUpdateManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../venue/VenueWhereUniqueInput";

export type EventUpdateInput = {
  name?: string | null;
  description?: string | null;
  date?: Date | null;
  sessions?: SessionUpdateManyWithoutEventsInput;
  venue?: VenueWhereUniqueInput | null;
};
