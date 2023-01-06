import { Component, OnInit } from '@angular/core';
import { ItemModel } from './interfaces/item';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists: ItemModel[] = [];
  constructor(private _apiSetvise: ApiService) { }
  ngOnInit(): void {
  }
  searchClick() {
    this._apiSetvise.getList().subscribe(r => {
      console.log(r);
      this.lists = r.items
    });
  }

}
