import { EventUpdateManyWithoutVenuesInput } from "./EventUpdateManyWithoutVenuesInput";

export type VenueUpdateInput = {
  address?: string | null;
  city?: string | null;
  capacity?: number | null;
  name?: string | null;
  events?: EventUpdateManyWithoutVenuesInput;
};
