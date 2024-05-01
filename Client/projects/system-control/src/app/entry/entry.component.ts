import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SysPermission, UmaMusumeTrpgPermission} from 'Common';
import {Entry} from './forms/entry.form';
import {ApiService} from './services/api.service';
import {Item} from "./models/item.model";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  selector: 'SystemControl-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entryForm: Entry;
  protected readonly SysPermission = SysPermission;
  protected readonly UmaMusumeTrpgPermission = UmaMusumeTrpgPermission;

  constructor(private apiService: ApiService, private router: Router, entry: Entry) {
    this.entryForm = entry;
    this.entryForm.createForm();
  }

  ngOnInit() {
  }

  click() {
    if (!this.entryForm.isError()) {
      this.apiService.entry(this.entryForm.getValues() as Item).subscribe(r => {
        switch (r.httpStatusCode) {
          case HttpStatusCode.Ok:
            this.router.navigateByUrl('/list').then(() => {
            });
            break;
          case HttpStatusCode.BadRequest:
            this.entryForm.setTouched();
            break;
        }
      });
    } else {
      this.entryForm.setTouched();
    }
  }
}
