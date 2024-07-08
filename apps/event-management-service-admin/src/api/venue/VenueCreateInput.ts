import { EventCreateNestedManyWithoutVenuesInput } from "./EventCreateNestedManyWithoutVenuesInput";

export type VenueCreateInput = {
  address?: string | null;
  city?: string | null;
  capacity?: number | null;
  name?: string | null;
  events?: EventCreateNestedManyWithoutVenuesInput;
};
