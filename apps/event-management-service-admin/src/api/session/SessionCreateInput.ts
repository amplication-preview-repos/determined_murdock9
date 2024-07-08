import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SessionCreateInput = {
  title?: string | null;
  startTime?: Date | null;
  endTime?: Date | null;
  event?: EventWhereUniqueInput | null;
};
