import { BaseListRequest } from 'Common';
import { Search } from './search.model';

export interface Request extends BaseListRequest {
  Search: Search;
}
