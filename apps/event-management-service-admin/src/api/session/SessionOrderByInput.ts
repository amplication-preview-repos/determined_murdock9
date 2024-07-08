import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  eventId?: SortOrder;
};
