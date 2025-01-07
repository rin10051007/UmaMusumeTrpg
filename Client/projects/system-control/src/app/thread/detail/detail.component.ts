import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Item} from "./models/item.model";
import {PageSizeOptions, ResponseApiService, ResponseSortItem, SearchItemForThread, SortDirection} from 'Common';

@Component({
  selector: 'SystemControl-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  standalone: false
})
export class DetailComponent implements OnInit {
  detail = this.initializingItem();
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
    pageSize: PageSizeOptions[1]
  }

  constructor(private apiService: ApiService,
              private responseApiService: ResponseApiService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.route.params.subscribe((params) => {
      this.apiService.detail({id: (Number(params['id']) || 0), token: ''})
        .subscribe(r => {
          this.detail = r.detail as Item;
          console.log(this.detail);
          this.responseSearch.threadId = this.detail.id;
          this.responseApiService.getListForThread(this.responseSearch).subscribe(r => {
            console.log(r);
          });
        });
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
}
