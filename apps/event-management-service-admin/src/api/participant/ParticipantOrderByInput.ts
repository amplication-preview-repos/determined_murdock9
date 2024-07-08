import { SortOrder } from "../../util/SortOrder";

export type ParticipantOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
};
