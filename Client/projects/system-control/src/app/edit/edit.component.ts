import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SysPermission, UmaMusumeTrpgPermission} from "Common";
import {ApiService as DetailApiService} from '../detail/services/api.service';
import {Item} from './models/item.model';
import {ApiService} from './services/api.service';

@Component({
  selector: 'SystemControl-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editItem: Item = {
    loginId: '',
    sysPermission: SysPermission.None,
    umaMusumeTrpgPermission: UmaMusumeTrpgPermission.None,
    email: '',
    password: '',
    id: 0,
    name: '',
    token: ''
  };

  constructor(private apiService: ApiService,
              private detailApiService: DetailApiService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.detailApiService.detail({id: (Number(params['id']) || 0), token: ''})
        .subscribe(r => {
          this.editItem = r.detail as unknown as Item;
        });
    });
  }

  edit() {
    this.editItem.password = 'adminPassword';
    this.apiService.edit(this.editItem).subscribe(r => {
      console.log(r);
    });
  }

}
