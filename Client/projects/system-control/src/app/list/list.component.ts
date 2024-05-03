import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from '@angular/router';
import {DisplayCount, SortDirection, SysPermission, SystemSortItem, UmaMusumeTrpgPermission} from 'Common';
import {Item} from './models/item.model';
import {Search} from './models/search.model';
import {ApiService} from './services/api.service';

@Component({
  selector: 'SystemControl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  columnsToDisplay: string[] = ['id', 'name', 'sysPermission', 'umaMusumeTrpgPermission', 'buttons'];
  list: Item[] = [];
  search: Search = {
    name: '',
    sysPermission: SysPermission.None,
    umaMusumeTrpgPermission: UmaMusumeTrpgPermission.None,
    sortItem: SystemSortItem.none,
    sortDirection: SortDirection.none,
    displayPage: 1,
    displayCount: DisplayCount[1]
  };
  count = 0;

  protected readonly SystemSortItem = SystemSortItem;
  protected readonly DisplayCount = DisplayCount;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.apiService.getList({
          name: (params as Search).name,
          sysPermission: Number((params as Search).sysPermission || 0),
          umaMusumeTrpgPermission: Number((params as Search).umaMusumeTrpgPermission || 0),
          sortItem: Number((params as Search).sortItem || 0),
          sortDirection: Number((params as Search).sortDirection || 0),
          displayPage: Number((params as Search).displayPage || 0),
          displayCount: Number((params as Search).displayCount || DisplayCount[1]),
        } as Search).subscribe(r => {
          this.list = r.items;
          this.search = r.search;
          this.count = r.totalCount;
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
        displayPage: 0,
        displayCount: DisplayCount[0]
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
    this.addQueryParam(['displayPage', 'displayCount'], [e.pageIndex, e.pageSize]);
  }
}
