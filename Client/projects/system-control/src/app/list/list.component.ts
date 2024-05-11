import {DatePipe} from "@angular/common";
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
import {Search} from "./forms/search.form";
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
  searchItem: SearchItem = {
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
  searchForm: Search;
  length = 0;
  isDetailSearch: boolean = false;
  protected readonly SystemSortItem = SystemSortItem;
  protected readonly PageSizeOptions = PageSizeOptions;
  protected readonly ColumnsToDisplay = SysListColumnsToDisplay;
  protected readonly UmaMusumeTrpgPermission = UmaMusumeTrpgPermission;
  protected readonly SysPermission = SysPermission;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router, search: Search,
              public datePipe: DatePipe) {
    this.searchForm = search;
    this.searchForm.createForm();
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
        const item = params as SearchItem;
        this.searchForm.setValues(item);
        this.apiService.getList({
          integration: item.integration,
          loginId: item.loginId,
          name: item.name,
          email: item.email,
          sysPermission: Number(item.sysPermission || 0),
          umaMusumeTrpgPermission: Number(item.umaMusumeTrpgPermission || 0),
          isUndeleted: Number(item.isUndeleted) == 1 || true,
          isDeleted: Number(item.isDeleted) == 1 || false,
          createTimeStart: item.createTimeStart || null,
          createTimeEnd: item.createTimeEnd || null,
          updateTimeStart: item.updateTimeStart || null,
          updateTimeEnd: item.updateTimeEnd || null,
          deleteTimeStart: item.deleteTimeStart || null,
          deleteTimeEnd: item.deleteTimeEnd || null,
          sortItem: Number(item.sortItem || 0),
          sortDirection: Number(item.sortDirection || 0),
          pageIndex: Number(item.pageIndex || 0),
          pageSize: Number(item.pageSize || PageSizeOptions[1]),
        } as SearchItem).subscribe(r => {
          this.list = r.items;
          this.searchItem = r.search;
          this.length = r.length;
        });
      }
    );
  }

  sortItemSet(sortItem: SystemSortItem) {
    if (sortItem !== this.searchItem.sortItem) {
      this.searchItem.sortDirection = SortDirection.none;
    }
    this.addQueryParam(['sortItem', 'sortDirection'], [sortItem, (this.searchItem.sortDirection + 1) % 3 as SortDirection]);
  }

  searchClick() {
    this.addQueryParam([
      'integration',
      'loginId',
      'name',
      'email',
      'sysPermission',
      'umaMusumeTrpgPermission',
      'isUndeleted',
      'isDeleted',
      'createTimeStart',
      'createTimeEnd',
      'updateTimeStart',
      'updateTimeEnd',
      'deleteTimeStart',
      'deleteTimeEnd'
    ], [
      this.searchForm.getValue('integration') ?? '',
      this.searchForm.getValue('loginId') ?? '',
      this.searchForm.getValue('name') ?? '',
      this.searchForm.getValue('email') ?? '',
      this.searchForm.getValue('sysPermission'),
      this.searchForm.getValue('umaMusumeTrpgPermission'),
      this.searchForm.getValue('isUndeleted') ? 1 : 0,
      this.searchForm.getValue('isDeleted') ? 1 : 0,
      this.datePipe.transform(this.searchForm.getValue('createTimeStart'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('createTimeEnd'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('updateTimeStart'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('updateTimeEnd'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('deleteTimeStart'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('deleteTimeEnd'), 'YYYY-MM-dd'),
    ]);
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
        createTimeStart: '',
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
