import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SessionUpdateInput = {
  title?: string | null;
  startTime?: Date | null;
  endTime?: Date | null;
  event?: EventWhereUniqueInput | null;
};
