import { ICard } from '../../card/interfaces/card';

export interface IBoard {
  id: string;
  name: string;
  created_at?: string;
  updated_at?: string;
}

export interface FullBoardData extends IBoard {
  statuses: {
    id: string;
    name: string;
    cards: ICard[];
  }[];
}
