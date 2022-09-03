import { Player as TPlayer } from "../api/player/Player";

export const PLAYER_TITLE_FIELD = "name";

export const PlayerTitle = (record: TPlayer): string => {
  return record.name || record.id;
};
