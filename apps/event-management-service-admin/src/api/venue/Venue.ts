import { Event } from "../event/Event";

export type Venue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  city: string | null;
  capacity: number | null;
  name: string | null;
  events?: Array<Event>;
};
