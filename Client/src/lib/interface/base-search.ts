import { SortDirection } from "../enum/sort-direction";

export interface BaseSearchModel {
  SortDirection: SortDirection;
  DisplayPage: number;
  DisplayCount: number;
}
