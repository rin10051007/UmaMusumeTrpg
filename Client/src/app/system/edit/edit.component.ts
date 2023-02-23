import { Component, OnInit } from '@angular/core';
import { ItemModel } from './models/item';
import { ApiService } from './services/api.service';
import { ApiService as DetailApiService } from '../detail/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { SysPermission } from '../../../lib/enum/sys-permission';
import { UmaMusumeTrpgPermission } from '../../../lib/enum/uma-musume-trpg-permission';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editItem: ItemModel = {
    loginId: '',
    sysPermission: SysPermission.None,
    umaMusumeTrpgPermission: UmaMusumeTrpgPermission.None,
    email: '',
    password: '',
    id: 0,
    name: '',
    token: ''
  };
  constructor(private _apiService: ApiService,
    private _detailApiService: DetailApiService,
    private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this._detailApiService.detail({ id: (Number(params['id']) || 0), token: '' })
        .subscribe(r => {
          this.editItem = r.detail as unknown as ItemModel;
        });

    })
  }

  ngOnInit() { }

  edit() {
    this.editItem.password = 'adminPassword';
    this._apiService.edit(this.editItem).subscribe(r => { console.log(r); });
  }

}
