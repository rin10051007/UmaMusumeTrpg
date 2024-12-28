import {BaseDetailRequest} from 'Common';
import {Select} from './select.model';

export interface Request extends BaseDetailRequest {
  select: Select
}
