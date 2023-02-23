import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { ItemModel } from './models/item';
import { SysPermission } from '../../../lib/enum/sys-permission';
import { UmaMusumeTrpgPermission } from '../../../lib/enum/uma-musume-trpg-permission';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  constructor(private _apiService: ApiService) {

  }
  ngOnInit() {
  }

  entry() {
    var entryItem: ItemModel = {
      loginId: 'hoge1',
      name: 'hoge',
      email: 'hoge@mail.com',
      password: 'hogePassowrd',
      sysPermission: SysPermission.SysAdmin,
      umaMusumeTrpgPermission: UmaMusumeTrpgPermission.Player
    };
    this._apiService.entry(entryItem).subscribe(r => {
    })
  }
}
