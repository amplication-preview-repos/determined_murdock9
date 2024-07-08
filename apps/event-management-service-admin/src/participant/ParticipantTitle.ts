import { Participant as TParticipant } from "../api/participant/Participant";

export const PARTICIPANT_TITLE_FIELD = "firstName";

export const ParticipantTitle = (record: TParticipant): string => {
  return record.firstName?.toString() || String(record.id);
};
