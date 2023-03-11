import { Component, OnInit } from '@angular/core';
import { SysPermission, UmaMusumeTrpgPermission } from '../../../../../dist/common';
import { Item } from './models/item.model';
import { ApiService } from './servises/api.service';

@Component({
  selector: 'SystemControl-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  ngOnInit() { }
  entry() {
    var entryItem: Item = {
      loginId: 'hoge1',
      name: 'hoge',
      email: 'hoge@mail.com',
      password: 'hogePassowrd',
      sysPermission: SysPermission.SysAdmin,
      umaMusumeTrpgPermission: UmaMusumeTrpgPermission.Player
    };
    this.apiService.entry(entryItem).subscribe(r => {
    })
  }
}
