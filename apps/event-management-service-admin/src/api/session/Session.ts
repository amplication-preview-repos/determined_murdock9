import { Event } from "../event/Event";

export type Session = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  startTime: Date | null;
  endTime: Date | null;
  event?: Event | null;
};
