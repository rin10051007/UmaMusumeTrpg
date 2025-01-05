import {DatePipe} from "@angular/common";
import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from '@angular/router';
import {
  PageSizeOptions,
  SortDirection,
  UserListColumnsToDisplay,
  SysPermission,
  UmaMusumeTrpgPermission,
  UserSortItem
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
    isUndeleted: true,
    isDeleted: false,
    creationTimeBeginning: null,
    creationTimeEnd: null,
    updateTimeBeginning: null,
    updateTimeEnd: null,
    deletingTimeBeginning: null,
    deletingTimeEnd: null,
    sortItem: UserSortItem.none,
    sortDirection: SortDirection.none,
    pageIndex: 1,
    pageSize: PageSizeOptions[1]
  };
  searchForm: Search;
  length = 0;
  isDetailSearch: boolean = false;
  protected readonly UserSortItem = UserSortItem;
  protected readonly PageSizeOptions = PageSizeOptions;
  protected readonly ColumnsToDisplay = UserListColumnsToDisplay;
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
    let isFirst = true;
    this.activatedRoute.queryParams.subscribe(
      params => {
        const item = params as SearchItem;
        if (isFirst) {
          isFirst = false;
          if ((Object.keys(item).length > 0)) {
            this.isDetailSearch =
              (item.loginId?.length ?? 0) > 0 ||
              (item.name?.length ?? 0) > 0 ||
              (item.email?.length ?? 0) > 0 ||
              Boolean((item.isUndeleted || 'true').toString() == 'false') ||
              Boolean((item.isDeleted || 'false').toString() == 'true') ||
              item.creationTimeBeginning != null ||
              item.creationTimeEnd != null ||
              item.updateTimeBeginning != null ||
              item.updateTimeEnd != null ||
              item.deletingTimeBeginning != null ||
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
          isUndeleted: Boolean((item.isUndeleted || 'true').toString() == 'true'),
          isDeleted: Boolean((item.isDeleted || 'false').toString() == 'true'),
          creationTimeBeginning: item.creationTimeBeginning || null,
          creationTimeEnd: item.creationTimeEnd || null,
          updateTimeBeginning: item.updateTimeBeginning || null,
          updateTimeEnd: item.updateTimeEnd || null,
          deletingTimeBeginning: item.deletingTimeBeginning || null,
          deletingTimeEnd: item.deletingTimeEnd || null,
          sortItem: Number(item.sortItem || 0),
          sortDirection: Number(item.sortDirection || 0),
          pageIndex: Number(item.pageIndex || 0),
          pageSize: Number(item.pageSize || PageSizeOptions[1])
        }).subscribe(r => {
          this.list = r.items;
          this.searchItem = r.search;
          this.length = r.length;
          this.searchForm.setValues(item);
        });
      });
    this.searchForm.getForm('isUndeleted').valueChanges.subscribe(c => {
      this.searchForm.getForm('isUndeleted').setValue(c, {emitEvent: false});
    });
    this.searchForm.getForm('isDeleted').valueChanges.subscribe(c => {
      this.searchForm.getForm('isDeleted').setValue(c, {emitEvent: false});
    });
  }

  sortItemSet(sortItem: UserSortItem) {
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
      'creationTimeBeginning',
      'creationTimeEnd',
      'updateTimeBeginning',
      'updateTimeEnd',
      'deletingTimeBeginning',
      'deletingTimeEnd'
    ], [
      this.searchForm.getValue('integration') ?? '',
      this.searchForm.getValue('loginId') ?? '',
      this.searchForm.getValue('name') ?? '',
      this.searchForm.getValue('email') ?? '',
      Number(this.searchForm.getValue('sysPermission') || 0),
      Number(this.searchForm.getValue('umaMusumeTrpgPermission') || 0),
      Boolean(this.searchForm.getValue('isUndeleted')),
      Boolean(this.searchForm.getValue('isDeleted')),
      this.datePipe.transform(this.searchForm.getValue('creationTimeBeginning'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('creationTimeEnd'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('updateTimeBeginning'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('updateTimeEnd'), 'YYYY-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('deletingTimeBeginning'), 'YYYY-MM-dd'),
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
        isUndeleted: true,
        isDeleted: false,
        creationTimeBeginning: '',
        creationTimeEnd: '',
        updateTimeBeginning: '',
        updateTimeEnd: '',
        deletingTimeBeginning: '',
        deletingTimeEnd: '',
        sortItem: UserSortItem.none,
        sortDirection: SortDirection.none,
        pageIndex: 0,
        pageSize: PageSizeOptions[0]
      }
    }).then(r => {
    });
  }

  addQueryParam(key: string[], values: (string | number)[]) {
    const queryParams: any = {};
    key.forEach((key, index) => {
      queryParams[key] = values[index];
    });
    this.router.navigate([], {queryParams: queryParams, queryParamsHandling: 'merge'}).then(r => {
    });
  }

  handlePageEvent(e: PageEvent) {
    this.addQueryParam(['pageIndex', 'pageSize'], [e.pageIndex, e.pageSize]);
  }
}
