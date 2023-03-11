import { SortDirection } from "../../../enums/public-enum";

export interface BaseListSearch {
  SortDirection: SortDirection;
  DisplayPage: number;
  DisplayCount: number;
}
