import { SortDirection } from "../../enum/sort-direction";

export interface BaseListSearchModel {
  SortDirection: SortDirection;
  DisplayPage: number;
  DisplayCount: number;
}
