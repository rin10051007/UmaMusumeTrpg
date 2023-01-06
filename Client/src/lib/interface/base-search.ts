import { SortDirection } from "../enum/sort-direction";

export interface BaseSearchModel {
  sortDirection: SortDirection;
  displayPage: number;
  displayCount: number;
}
