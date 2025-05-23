// Entities
export interface Entity {
  start: number;
  end: number;
}

export interface UrlEntity extends Entity {
  url: string; // https;//t.co/...
  expanded_url: string; // https://unfollow.ninja/
  display_url: string; // unfollow.ninja
}

export interface HashtagEntity extends Entity {
  tag: string;
}

export interface CashtagEntity extends Entity {
  tag: string;
}

export interface MentionEntity extends Entity {
  username: string;
}
