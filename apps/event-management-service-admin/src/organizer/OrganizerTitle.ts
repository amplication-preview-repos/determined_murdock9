import { Organizer as TOrganizer } from "../api/organizer/Organizer";

export const ORGANIZER_TITLE_FIELD = "firstName";

export const OrganizerTitle = (record: TOrganizer): string => {
  return record.firstName?.toString() || String(record.id);
};
