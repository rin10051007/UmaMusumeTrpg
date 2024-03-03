import {Component, OnInit} from '@angular/core';
import {SysPermission, UmaMusumeTrpgPermission} from 'Common';
import {Entry} from './forms/entry.form';
import {ApiService} from './services/api.service';

@Component({
  selector: 'SystemControl-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entryForm: Entry;
  protected readonly SysPermission = SysPermission;
  protected readonly UmaMusumeTrpgPermission = UmaMusumeTrpgPermission;

  constructor(private apiService: ApiService) {
    this.entryForm = new Entry();
  }

  ngOnInit() {
  }

  entry() {
    console.log(this.entryForm.getValues());
    this.apiService.entry(this.entryForm.getValues()).subscribe(r => {
    })
  }
}
