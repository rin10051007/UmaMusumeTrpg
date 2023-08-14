import {BaseDetailRequest} from 'Common';
import {Search} from './search.model';

export interface Request extends BaseDetailRequest {
  search: Search
}
