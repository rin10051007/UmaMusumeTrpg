import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService as DetailApiService} from '../detail/services/api.service';
import {Item} from './models/item.model';
import {ApiService} from './services/api.service';

@Component({
  selector: 'SystemControl-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  item: Item = {id: 0, token: '', name: '', updateTime: 0};

  constructor(private apiService: ApiService,
              private detailApiService: DetailApiService,
              private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.detailApiService.detail({id: (Number(params['id']) || 0), token: ''})
        .subscribe(r => {
          console.log(r)
        });

    })
  };

  delete() {
    this.apiService.delete(this.item)
      .subscribe(r => console.log(r));
  }
}
