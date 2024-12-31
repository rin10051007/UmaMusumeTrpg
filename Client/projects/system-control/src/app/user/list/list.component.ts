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
    styleUrls: ['./list.component.css'],
    standalone: false
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
    isUndeleted: 1,
    isDeleted: 0,
    creationTimeStart: null,
    creationTimeEnd: null,
    updateTimeStart: null,
    updateTimeEnd: null,
    deletingTimeStart: null,
    deletingTimeEnd: null,
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
    let isFirst = false;
    this.activatedRoute.queryParams.subscribe(
      params => {
        const item = params as SearchItem;
        if (!isFirst) {
          isFirst = true;
          if (!(Object.keys(item).length === 0)) {
            this.isDetailSearch =
              (item.loginId?.length??0) > 0 ||
              (item.name?.length??0) > 0 ||
              (item.email?.length??0) > 0 ||
              item.isUndeleted == 0 ||
              item.isDeleted == 1 ||
              item.creationTimeStart != null ||
              item.creationTimeEnd != null ||
              item.updateTimeStart != null ||
              item.updateTimeEnd != null ||
              item.deletingTimeStart != null ||
              item.deletingTimeEnd != null;
          }
        }
        this.apiService.getList({
          integration: item.integration,
          loginId: item.loginId,
          name: item.name,
          email: item.email,
          sysPermission: Number(item.sysPermission || 0),
          umaMusumeTrpgPermission: Number(item.umaMusumeTrpgPermission || 0),
          isUndeleted: Number(item.isUndeleted || 1),
          isDeleted: Number(item.isDeleted || 0),
          creationTimeStart: item.creationTimeStart || null,
          creationTimeEnd: item.creationTimeEnd || null,
          updateTimeStart: item.updateTimeStart || null,
          updateTimeEnd: item.updateTimeEnd || null,
          deletingTimeStart: item.deletingTimeStart || null,
          deletingTimeEnd: item.deletingTimeEnd || null,
          sortItem: Number(item.sortItem || 0),
          sortDirection: Number(item.sortDirection || 0),
          pageIndex: Number(item.pageIndex || 0),
          pageSize: Number(item.pageSize || PageSizeOptions[1]),
        } as SearchItem).subscribe(r => {
          this.list = r.items;
          this.searchItem = r.search;
          this.length = r.length;
          this.searchForm.setValues(item);
        });
      }
    );
    this.searchForm.getForm('isUndeleted').valueChanges.subscribe(c => {
      this.searchForm.getForm('isUndeleted').setValue(c ? 1 : 0, {emitEvent: false});
    });
    this.searchForm.getForm('isDeleted').valueChanges.subscribe(c => {
      this.searchForm.getForm('isDeleted').setValue(c ? 1 : 0, {emitEvent: false});
    });
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
      'creationTimeStart',
      'creationTimeEnd',
      'updateTimeStart',
      'updateTimeEnd',
      'deletingTimeStart',
      'deletingTimeEnd'
    ], [
      this.searchForm.getValue('integration') ?? '',
      this.searchForm.getValue('loginId') ?? '',
      this.searchForm.getValue('name') ?? '',
      this.searchForm.getValue('email') ?? '',
      Number(this.searchForm.getValue('sysPermission') || 0),
      Number(this.searchForm.getValue('umaMusumeTrpgPermission') || 0),
      Number(this.searchForm.getValue('isUndeleted') || 0),
      Number(this.searchForm.getValue('isDeleted') || 0),
      this.datePipe.transform(this.searchForm.getValue('creationTimeStart'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('creationTimeEnd'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('updateTimeStart'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('updateTimeEnd'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('deletingTimeStart'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('deletingTimeEnd'), 'YYYY-MM-dd'),
    ]);
  }

  searchResetClick() {
    this.searchForm.createForm();
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
        creationTimeStart: '',
        creationTimeEnd: '',
        updateTimeStart: '',
        updateTimeEnd: '',
        deletingTimeStart: '',
        deletingTimeEnd: '',
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
