import {HttpStatusCode} from "@angular/common/http";
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SysPermission, UmaMusumeTrpgPermission} from "Common";
import {ApiService as DetailApiService} from '../detail/services/api.service';
import {Item} from './models/item.model';
import {ApiService} from './services/api.service';

@Component({
  selector: 'SystemControl-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  standalone: false
})
export class DeleteComponent {

  item: Item = this.initializingItem();

  constructor(private apiService: ApiService,
              private detailApiService: DetailApiService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe((params) => {
      this.detailApiService.detail({id: (Number(params['id']) || 0), token: ''})
        .subscribe(r => {
          this.item = (r.detail as Item);
        });
    })
  };

  delete() {
    this.apiService.delete(this.item)
      .subscribe(r => {
        switch (r.httpStatusCode) {
          case HttpStatusCode.Ok:
            this.router.navigateByUrl('/user/list').then(() => {
            });
            break;
          case HttpStatusCode.BadRequest:
            break;
        }
      });
  }

  initializingItem() {
    const now = new Date(Date.now());
    return {
      id: 0,
      loginId: '',
      name: '',
      sysPermission: SysPermission.None,
      umaMusumeTrpgPermission: UmaMusumeTrpgPermission.None,
      email: '',
      creationTime: now,
      updateTime: now,
      deletingTime: null,
      isDeleted: false,
      token: ''
    } as Item;
  }
}
