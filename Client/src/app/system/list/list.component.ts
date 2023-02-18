import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayCount } from '../../../const/display-count';
import { SortDirection } from '../../../lib/enum/sort-direction';
import { SysPermission } from '../../../lib/enum/sys-permission';
import { SystemSortItem } from '../../../lib/enum/system/sort-item';
import { UmaMusumeTrpgPermission } from '../../../lib/enum/uma-musume-trpg-permission';
import { ItemModel } from './models/item';
import { SearchModel } from './models/search';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists: ItemModel[] = [];
  constructor(private _apiSetvise: ApiService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(
      params => {
        this._apiSetvise.getList({
          Name: (params as SearchModel).Name,
          SysPermission: Number((params as SearchModel).SysPermission || 0),
          UmaMusumeTrpgPermission: Number((params as SearchModel).UmaMusumeTrpgPermission || 0),
          SortItem: Number((params as SearchModel).SortItem || 0),
          SortDirection: Number((params as SearchModel).SortDirection || 0),
          DisplayPage: Number((params as SearchModel).DisplayPage || 1),
          DisplayCount: Number((params as SearchModel).DisplayCount || DisplayCount[1]),
        } as SearchModel).subscribe(r => {
          this.lists = r.items
        });
      }
    );
  }

  searchClick() {

    this._router.navigate([], {
      queryParams: {
        Name: '',
        SysPermission: [SysPermission.None],
        UmaMusumeTrpgPermission: [UmaMusumeTrpgPermission.None],
        SortItem: SystemSortItem.none,
        SortDirection: SortDirection.none,
        DisplayPage: 1,
        DisplayCount: DisplayCount[0]
      }
    });
  }
}
