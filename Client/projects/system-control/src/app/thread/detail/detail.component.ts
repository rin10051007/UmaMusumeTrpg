import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Item} from "./models/item.model";
import {
  environment,
  PageSizeOptions,
  ResponseApiService,
  ResponseSortItem,
  Search,
  SearchItemForThread,
  SortDirection
} from 'Common';
import {PageEvent} from "@angular/material/paginator";
import {DatePipe} from "@angular/common";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'SystemControl-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  standalone: false
})
export class DetailComponent implements OnInit, OnDestroy {
  detail = this.initializingItem();
  detailApiId: any;
  responseSearchForm: Search;
  responseLength = 0;
  protected readonly PageSizeOptions = PageSizeOptions;
  protected readonly ResponseGetIntervals = environment.responseGetIntervals;
  responseSearch: SearchItemForThread = {
    threadId: 0,
    threadResNoBeginning: 0,
    threadResNoEnd: 0,
    content: '',
    creatingTimeBeginning: null,
    creatingTimeEnd: null,
    sortItem: ResponseSortItem.none,
    sortDirection: SortDirection.none,
    pageIndex: 0,
    pageSize: PageSizeOptions[3],
    responseGetInterval: environment.responseGetIntervals[5]
  }

  constructor(private apiService: ApiService, public responseApiService: ResponseApiService,
              private route: ActivatedRoute, private router: Router, private activatedRoute: ActivatedRoute,
              search: Search, public datePipe: DatePipe) {
    this.responseSearchForm = search;
    this.responseSearchForm.createForm();
    this.route.params.subscribe((params) => {
      this.getDetail(Number(params['id']));
      clearTimeout(this.detailApiId);
      this.detailApiId = setInterval(() => this.getDetail(this.detail.id), this.responseSearch.responseGetInterval);
    });
  }

  ngOnInit() {
    let isFirst = true;
    this.activatedRoute.queryParams.subscribe(params => {
      const item = params as SearchItemForThread;
      if (isFirst) {
        isFirst = false;
      }
      this.responseSearch.threadResNoBeginning = Number(item.threadResNoBeginning || 0);
      this.responseSearch.threadResNoEnd = Number(item.threadResNoEnd || 0);
      this.responseSearch.content = item.content;
      this.responseSearch.creatingTimeBeginning = item.creatingTimeBeginning || null;
      this.responseSearch.creatingTimeEnd = item.creatingTimeEnd || null;
      this.responseSearch.sortItem = Number(item.sortItem || 0);
      this.responseSearch.sortDirection = Number(item.sortDirection || 0);
      this.responseSearch.pageIndex = Number(item.pageIndex || 0);
      this.responseSearch.pageSize = Number(item.pageSize || PageSizeOptions[3]);
      this.responseSearch.responseGetInterval = Number(item.responseGetInterval || environment.responseGetIntervals[5]);
      if (this.responseSearch.threadId > 0) {
        this.getResponseList();
        if (this.detail.isActive) {
          clearTimeout(this.detailApiId);
          this.detailApiId = setInterval(() => this.getDetail(this.detail.id), this.responseSearch.responseGetInterval);
        }
      }
    });
  }

  ngOnDestroy() {
    clearTimeout(this.detailApiId);
  }

  getDetail(id: number = 0) {
    this.apiService.detail({id: (id), token: ''})
      .subscribe(r => {
        let item = r.detail as Item;
        this.detail.id = item.id;
        this.detail.creatingUserId = item.creatingUserId;
        this.detail.creatingUserName = item.creatingUserName;
        this.detail.title = item.title;
        this.detail.resCount = item.resCount;
        this.detail.isActive = item.isActive;
        this.detail.token = item.token;
        this.detail.creatingTime = item.creatingTime;
        this.detail.updatingTime = item.updatingTime;
        this.responseSearch.threadId = this.detail.id;
        this.getResponseList()
      });
  }

  getResponseList() {
    this.responseApiService.getListForThread(this.responseSearch).subscribe(r => {
      this.detail.responses = r.items;
      this.responseLength = r.length;
    });
  }

  initializingItem() {
    const now = new Date(Date.now());
    return {
      id: 0,
      creatingUserId: 0,
      creatingUserName: '',
      title: '',
      resCount: 0,
      isActive: false,
      token: '',
      creatingTime: now,
      updatingTime: now,
      responses: []
    } as Item;
  }

  searchResetClick() {
    this.responseSearchForm.toReset();
    this.router.navigate([], {
      queryParams: {
        threadResNoBeginning: 0,
        threadResNoEnd: 0,
        content: '',
        creatingTimeBeginning: null,
        creatingTimeEnd: null,
        sortItem: ResponseSortItem.none,
        sortDirection: SortDirection.none,
        pageIndex: 0,
        pageSize: PageSizeOptions[3],
        responseGetInterval: environment.responseGetIntervals[5]
      }
    }).then(r => {
    });
  }

  changeResponseGetInterval(n: MatSelectChange) {
    this.addQueryParam(['responseGetInterval'], [n.value]);
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
