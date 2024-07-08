import { Session } from "../session/Session";
import { Venue } from "../venue/Venue";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  date: Date | null;
  sessions?: Array<Session>;
  venue?: Venue | null;
};
