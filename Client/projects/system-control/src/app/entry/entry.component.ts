import { Component } from '@angular/core';
import { SysPermission, UmaMusumeTrpgPermission } from '../../../../../dist/common';
import { Item } from './models/item.model';
import { ApiService } from './servises/api.service';

@Component({
  selector: 'SystemControl-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  constructor(private _apiService: ApiService) { }
  entry() {
    var entryItem: Item = {
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
