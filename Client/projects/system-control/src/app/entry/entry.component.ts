import { Component, OnInit } from '@angular/core';
import { SysPermission, UmaMusumeTrpgPermission } from 'Common';
import { Item } from './models/item.model';
import { ApiService } from './services/api.service';

@Component({
  selector: 'SystemControl-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  entry() {
    //todo:一時重複阻止用
    var now = Date.now().toString();
    var entryItem: Item = {
      loginId: 'hoge' + now,
      name: 'hoge' + now,
      email: 'hoge' + now + '@mail.com',
      password: 'hogePassowrd',
      passwordcfm: 'hogePassowrd',
      sysPermission: SysPermission.SysAdmin,
      umaMusumeTrpgPermission: UmaMusumeTrpgPermission.Player
    };
    this.apiService.entry(entryItem).subscribe(r => {
    })
  }
}
