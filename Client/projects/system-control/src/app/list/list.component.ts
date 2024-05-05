import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from '@angular/router';
import {PageSizeOptions, SortDirection, SysPermission, SystemSortItem, UmaMusumeTrpgPermission} from 'Common';
import {Item} from './models/item.model';
import {SearchItem} from './models/search-item.model';
import {ApiService} from './services/api.service';

@Component({
  selector: 'SystemControl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  columnsToDisplay: string[] = ['id', 'name', 'loginId', 'sysPermission', 'umaMusumeTrpgPermission', 'email', 'createTime', 'updateTime', 'deleteTime', 'buttons'];
  list: Item[] = [];
  search: SearchItem = {
    integration: '',
    loginId: '',
    name: '',
    email: '',
    sysPermission: SysPermission.None,
    umaMusumeTrpgPermission: UmaMusumeTrpgPermission.None,
    isUndeleted: true,
    isDeleted: false,
    createTimeStart: null,
    createTimeEnd: null,
    updateTimeStart: null,
    updateTimeEnd: null,
    deleteTimeStart: null,
    deleteTimeEnd: null,
    sortItem: SystemSortItem.none,
    sortDirection: SortDirection.none,
    pageIndex: 1,
    pageSize: PageSizeOptions[1]
  };
  length = 0;
  isDetailSearch: boolean = false;
  protected readonly SystemSortItem = SystemSortItem;
  protected readonly PageSizeOptions = PageSizeOptions;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.apiService.getList({
          integration: (params as SearchItem).integration,
          loginId: (params as SearchItem).loginId,
          name: (params as SearchItem).name,
          email: (params as SearchItem).email,
          sysPermission: Number((params as SearchItem).sysPermission || 0),
          umaMusumeTrpgPermission: Number((params as SearchItem).umaMusumeTrpgPermission || 0),
          isUndeleted: (params as SearchItem).isUndeleted || true,
          isDeleted: (params as SearchItem).isDeleted || false,
          sortItem: Number((params as SearchItem).sortItem || 0),
          sortDirection: Number((params as SearchItem).sortDirection || 0),
          pageIndex: Number((params as SearchItem).pageIndex || 0),
          pageSize: Number((params as SearchItem).pageSize || PageSizeOptions[1]),
        } as SearchItem).subscribe(r => {
          this.list = r.items;
          this.search = r.search;
          this.length = r.length;
        });
      }
    );
  }

  sortItemSet(sortItem: SystemSortItem) {
    if (sortItem !== this.search.sortItem) {
      this.search.sortDirection = SortDirection.none;
    }
    this.addQueryParam(['sortItem', 'sortDirection'], [sortItem, (this.search.sortDirection + 1) % 3 as SortDirection]);
  }

  searchResetClick() {
    this.router.navigate([], {
      queryParams: {
        name: '',
        sysPermission: [SysPermission.None],
        umaMusumeTrpgPermission: [UmaMusumeTrpgPermission.None],
        sortItem: SystemSortItem.none,
        sortDirection: SortDirection.none,
        pageIndex: 0,
        pageSize: PageSizeOptions[0]
      }
    });
  }

  addQueryParam(key: string[], values: (string | number)[]) {
    const queryParams: any = {};
    key.forEach((key, index) => {
      queryParams[key] = values[index];
    });
    this.router.navigate([], {queryParams: queryParams, queryParamsHandling: 'merge'});
  }

  handlePageEvent(e: PageEvent) {
    this.addQueryParam(['pageIndex', 'pageSize'], [e.pageIndex, e.pageSize]);
  }
}
