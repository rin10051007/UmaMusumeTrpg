import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SysPermission, UmaMusumeTrpgPermission} from "Common";
import {Item} from "./models/item.model";
import {ApiService} from './services/api.service';

@Component({
  selector: 'SystemControl-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail: Item = this.initializingItem();

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.route.params.subscribe((params) => {
      this.apiService.detail({id: (Number(params['id']) || 0), token: ''})
        .subscribe(r => {
          this.detail = r.detail as Item;
        });
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
      createTime: now,
      updateTime: now,
      deleteTime: null,
      isDeleted: false,
      token: ''
    } as Item;
  }
}
