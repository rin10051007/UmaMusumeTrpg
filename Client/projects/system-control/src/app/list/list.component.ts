import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayCount, SortDirection, SysPermission, SystemSortItem, UmaMusumeTrpgPermission } from '../../../../../dist/common';
import { Item } from './models/item.model';
import { Search } from './models/search.model';
import { ApiService } from './servises/api.service';

@Component({
  selector: 'SystemControl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists: Item[] = [];
  constructor(private _apiSetvise: ApiService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }


  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(
      params => {
        this._apiSetvise.getList({
          Name: (params as Search).Name,
          SysPermission: Number((params as Search).SysPermission || 0),
          UmaMusumeTrpgPermission: Number((params as Search).UmaMusumeTrpgPermission || 0),
          SortItem: Number((params as Search).SortItem || 0),
          SortDirection: Number((params as Search).SortDirection || 0),
          DisplayPage: Number((params as Search).DisplayPage || 1),
          DisplayCount: Number((params as Search).DisplayCount || DisplayCount[1]),
        } as Search).subscribe(r => {
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
