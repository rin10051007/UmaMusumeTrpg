import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {Item, nameListItem} from "./models/item.model";
import {SearchItem} from "./models/search-item.model";
import {PageSizeOptions, SortDirection, ThreadListColumnsToDisplay, ThreadSortItem} from 'Common';
import {Search} from "./forms/search.form";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {ApiService} from "./services/api.service";

@Component({
  selector: 'SystemControl-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent implements OnInit {
  list: Item[] = [];
  nameList: nameListItem[] = [];
  searchItem: SearchItem = {
    creatingUserId: 0,
    title: '',
    resCountMin: 0,
    resCountMax: 0,
    isUndeleted: true,
    isDeleted: false,
    creatingTimeBeginning: null,
    creatingTimeEnd: null,
    updatingTimeBeginning: null,
    updatingTimeEnd: null,
    deletingTimeBeginning: null,
    deletingTimeEnd: null,
    sortItem: ThreadSortItem.none,
    sortDirection: SortDirection.none,
    pageIndex: 1,
    pageSize: PageSizeOptions[1]
  };
  searchForm: Search;
  length = 0;
  isDetailSearch: boolean = false;
  protected readonly ThreadSortItem = ThreadSortItem;
  protected readonly PageSizeOptions = PageSizeOptions;
  protected readonly ColumnsToDisplay = ThreadListColumnsToDisplay

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router, search: Search,
              public datePipe: DatePipe) {
    this.searchForm = search;
    this.searchForm.createForm();
  }

  ngOnInit(): void {
    let isFirst = true;
    this.activatedRoute.queryParams.subscribe(params => {
      const item = params as SearchItem;
      if (isFirst) {
        isFirst = false;
        if ((Object.keys(item).length > 0)) {
          this.isDetailSearch =
            Boolean((item.isUndeleted || 'true').toString() == 'false') ||
            Boolean((item.isDeleted || 'false').toString() == 'true') ||
            item.creatingTimeBeginning != null ||
            item.creatingTimeEnd != null ||
            item.updatingTimeBeginning != null ||
            item.updatingTimeEnd != null ||
            item.deletingTimeBeginning != null ||
            item.deletingTimeEnd != null;
        }
      }
      this.apiService.getList({
        creatingUserId: Number(item.creatingUserId || 0),
        title: item.title,
        resCountMin: Number(item.resCountMin || 0),
        resCountMax: Number(item.resCountMax || 0),
        isUndeleted: Boolean((item.isUndeleted || 'true').toString() == 'true'),
        isDeleted: Boolean((item.isDeleted || 'false').toString() == 'true'),
        creatingTimeBeginning: item.creatingTimeBeginning || null,
        creatingTimeEnd: item.creatingTimeEnd || null,
        updatingTimeBeginning: item.updatingTimeBeginning || null,
        updatingTimeEnd: item.updatingTimeEnd || null,
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
    this.apiService.getNameList().subscribe(r => this.nameList = r.items);
  }

  sortItemSet(sortItem: ThreadSortItem) {
    if (sortItem !== this.searchItem.sortItem) {
      this.searchItem.sortDirection = SortDirection.none;
    }
    this.addQueryParam(['sortItem', 'sortDirection'], [sortItem, (this.searchItem.sortDirection + 1) % 3 as SortDirection]);
  }

  searchClick() {
    this.addQueryParam([
      'creatingUserId',
      'title',
      'resCountMin',
      'resCountMax',
      'isUndeleted',
      'isDeleted',
      'creatingTimeBeginning',
      'creatingTimeEnd',
      'updatingTimeBeginning',
      'updatingTimeEnd',
      'deletingTimeBeginning',
      'deletingTimeEnd',
    ], [
      Number(this.searchForm.getValue('creatingUserId') || 0),
      this.searchForm.getValue('title') ?? '',
      Number(this.searchForm.getValue('resCountMin') || 0),
      Number(this.searchForm.getValue('resCountMax') || 0),
      Boolean(this.searchForm.getValue('isUndeleted')),
      Boolean(this.searchForm.getValue('isDeleted')),
      this.datePipe.transform(this.searchForm.getValue('creatingTimeBeginning'), 'yyyy-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('creatingTimeEnd'), 'yyyy-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('updatingTimeBeginning'), 'yyyy-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('updatingTimeEnd'), 'yyyy-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('deletingTimeBeginning'), 'yyyy-MM-dd'),
      this.datePipe.transform(this.searchForm.getValue('deletingTimeEnd'), 'yyyy-MM-dd'),
    ])
  }

  searchResetClick() {
    this.searchForm.toReset();
    this.router.navigate([], {
      queryParams: {
        creatingUserId: 0,
        title: '',
        resCountMin: 0,
        resCountMax: 0,
        isUndeleted: true,
        isDeleted: false,
        creatingTimeBeginning: null,
        creatingTimeEnd: null,
        updatingTimeBeginning: null,
        updatingTimeEnd: null,
        deletingTimeBeginning: null,
        deletingTimeEnd: null,
        sortItem: ThreadSortItem.none,
        sortDirection: SortDirection.none,
        pageIndex: 1,
        pageSize: PageSizeOptions[1]
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
