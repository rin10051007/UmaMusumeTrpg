import { BaseRequestModel } from "src/lib/interface/base-request";
import { SearchModel } from './search';

export interface RequestModel extends BaseRequestModel {
  Search: SearchModel
}
