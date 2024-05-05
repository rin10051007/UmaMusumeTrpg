import {HttpStatusCode} from "@angular/common/http";
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService as DetailApiService} from '../detail/services/api.service';
import {Item} from './models/item.model';
import {ApiService} from './services/api.service';

@Component({
  selector: 'SystemControl-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  item: Item = {id: 0, token: '', name: '', updateTime: new Date()};

  constructor(private apiService: ApiService,
              private detailApiService: DetailApiService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe((params) => {
      this.detailApiService.detail({id: (Number(params['id']) || 0), token: ''})
        .subscribe(r => {
          this.item.id = (r.detail as Item).id;
          this.item.token = (r.detail as Item).token;
          this.item.name = (r.detail as Item).name;
          this.item.updateTime = (r.detail as Item).updateTime;
        });

    })
  };

  delete() {
    this.apiService.delete(this.item)
      .subscribe(r => {
        switch (r.httpStatusCode) {
          case HttpStatusCode.Ok:
            this.router.navigateByUrl('/list').then(() => {
            });
            break;
          case HttpStatusCode.BadRequest:
            break;
        }
      });
  }
}
