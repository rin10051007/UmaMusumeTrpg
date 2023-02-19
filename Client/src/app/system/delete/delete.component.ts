import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemModel } from './models/item';
import { ApiService } from './services/api.service';
import { ApiService as DetailApiService } from '../detail/services/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  item: ItemModel = { id: 0, token: '' };
  constructor(private _apiService: ApiService,
    private _detailApiService: DetailApiService,
    private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this._detailApiService.detail({ id: (Number(params['id']) || 0), token: '' })
        .subscribe(r => {
          this.item.id = r.detail.id;
          this.item.token = r.detail.token;
        });

    })
  };
  ngOnInit() { }
  delete() {
    this._apiService.delete(this.item)
      .subscribe(r => console.log(r));
  }
}
