import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from '@angular/router';
import {
  PageSizeOptions,
  SortDirection,
  SysListColumnsToDisplay,
  SysPermission,
  SystemSortItem,
  UmaMusumeTrpgPermission
} from 'Common';
import {Item} from './models/item.model';
import {SearchItem} from './models/search-item.model';
import {ApiService} from './services/api.service';

@Component({
  selector: 'SystemControl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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
  protected readonly ColumnsToDisplay = SysListColumnsToDisplay;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
        const item = params as SearchItem;
        this.apiService.getList({
          integration: item.integration,
          loginId: item.loginId,
          name: item.name,
          email: item.email,
          sysPermission: Number(item.sysPermission || 0),
          umaMusumeTrpgPermission: Number(item.umaMusumeTrpgPermission || 0),
          isUndeleted: Number(item.isUndeleted) == 1 || true,
          isDeleted: Number(item.isDeleted) == 1 || false,
          createTimeStart: item.createTimeStart ? new Date(item.createTimeStart) : null,
          sortItem: Number(item.sortItem || 0),
          sortDirection: Number(item.sortDirection || 0),
          pageIndex: Number(item.pageIndex || 0),
          pageSize: Number(item.pageSize || PageSizeOptions[1]),
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
        integration: '',
        loginId: '',
        name: '',
        email: '',
        sysPermission: SysPermission.None,
        umaMusumeTrpgPermission: UmaMusumeTrpgPermission.None,
        isUndeleted: 1,
        isDeleted: 0,
        createTimeStart: '2024/5/4',
        createTimeEnd: '',
        updateTimeStart: '',
        updateTimeEnd: '',
        deleteTimeStart: '',
        deleteTimeEnd: '',
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
