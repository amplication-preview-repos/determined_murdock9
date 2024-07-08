import { SortOrder } from "../../util/SortOrder";

export type VenueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  city?: SortOrder;
  capacity?: SortOrder;
  name?: SortOrder;
};
