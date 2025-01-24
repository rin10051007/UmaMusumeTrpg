import {Component, OnInit} from '@angular/core';
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

@Component({
  selector: 'SystemControl-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  standalone: false
})
export class DetailComponent implements OnInit {
  detail = this.initializingItem();
  responseListApiId = setInterval(() => this.getResponseList(), environment.responseGetInterval);
  responseSearchForm: Search;
  responseSearch: SearchItemForThread = {
    threadId: 0,
    threadResNoBeginning: 0,
    threadResNoEnd: 0,
    content: '',
    creatingTimeBeginning: null,
    creatingTimeEnd: null,
    sortItem: ResponseSortItem.none,
    sortDirection: SortDirection.none,
    pageIndex: 1,
    pageSize: PageSizeOptions[3]
  }

  constructor(private apiService: ApiService, private responseApiService: ResponseApiService,
              private route: ActivatedRoute, private router: Router,
              search: Search, public datePipe: DatePipe) {
    this.responseSearchForm=search;
    this.responseSearchForm.createForm();
  }

  ngOnInit() {
    this.getDetail();
  }

  ngOnDestroy() {
    clearTimeout(this.responseListApiId);
  }

  getDetail() {
    this.route.params.subscribe((params) => {
      this.apiService.detail({id: (Number(params['id']) || 0), token: ''})
        .subscribe(r => {
          this.detail = r.detail as Item;
          this.responseSearch.threadId = this.detail.id;
          this.getResponseList()
        });
    });
  }

  getResponseList() {
    this.responseApiService.getListForThread(this.responseSearch).subscribe(r => {
    });
  }

  initializingItem() {
    const now = new Date(Date.now());
    return {
      id: 0,
      creatingUserId: 0,
      creationUserName: '',
      title: '',
      resCount: 0,
      token: '',
      creatingTime: now,
      updatingTime: now
    } as Item;
  }

  searchResetClick() {
    this.responseSearchForm.toReset();
    this.router.navigate([], {
      queryParams: {
        threadId: 0,
        threadResNoBeginning: 0,
        threadResNoEnd: 0,
        content: '',
        creatingTimeBeginning: null,
        creatingTimeEnd: null,
        sortItem: ResponseSortItem.none,
        sortDirection: SortDirection.none,
        pageIndex: 1,
        pageSize: PageSizeOptions[3]
      }}).then(r => {
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
