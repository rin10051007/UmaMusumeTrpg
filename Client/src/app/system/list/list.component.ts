import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel } from './interfaces/item';
import { SearchModel } from './interfaces/search';
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
    private _router: Router,
    private _jsonPipe: JsonPipe) { }
  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(
      params => {
        /*
          todo:2023/01/06
          指定した型の要素があれば代入しそれが数値なら変換も行う関数を作成する
        */
        params = (params as SearchModel);
        this._apiSetvise.getList({
          Name: (params as SearchModel).Name,
          SysPermissions: Number((params as SearchModel).SysPermissions),
          UmaMusumeTrpgPermissions: Number((params as SearchModel).UmaMusumeTrpgPermissions),
          SortItem: Number((params as SearchModel).SortItem),
          SortDirection: Number((params as SearchModel).SortDirection),
          DisplayCount: Number((params as SearchModel).DisplayCount),
          DisplayPage: Number((params as SearchModel).DisplayCount),
        } as SearchModel).subscribe(r => {
          ;
          this.lists = r.items
        });
      }
    );
  }
  searchClick() {
    // this._router.navigate([], {
    //   queryParams: {
    //     name: 'name',
    //     sysPermissions: [SysPermission.SysAdmin],
    //     umaMusumeTrpgPermissions: [UmaMusumeTrpgPermission.GmPlayer],
    //     sortItem: SystemSortItem.name,
    //     sortDirection: SortDirection.ascendingOrder,
    //     displayPage: 1,
    //     displayCount: 100
    //   }
    // });
    console.log(this._router.url);
    // this._router.navigate(
    //   [this._activatedRoute.routeConfig?.path],
    //   { queryParams: request }
    // );
  }
}
