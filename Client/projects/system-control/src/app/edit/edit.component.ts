import {HttpStatusCode} from "@angular/common/http";
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SysPermission, UmaMusumeTrpgPermission} from "Common";
import {ApiService as DetailApiService} from '../detail/services/api.service';
import {Edit} from "./forms/edit.form";
import {Item} from './models/item.model';
import {ApiService} from './services/api.service';

@Component({
  selector: 'SystemControl-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: Edit;
  protected readonly SysPermission = SysPermission;
  protected readonly UmaMusumeTrpgPermission = UmaMusumeTrpgPermission;

  constructor(private apiService: ApiService,
              private detailApiService: DetailApiService,
              private route: ActivatedRoute, private router: Router, edit: Edit) {
    this.editForm = edit;
    this.editForm.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.detailApiService.detail({id: (Number(params['id']) || 0), token: ''})
        .subscribe(r => {
          this.editForm.setValues(r.detail as unknown as Item);
        });
    });
  }

  click() {
    this.apiService.edit(this.editForm.getValues() as Item).subscribe(r => {
      switch (r.httpStatusCode) {
        case HttpStatusCode.Ok:
          this.router.navigateByUrl('/list').then(() => {
          });
          break;
        case HttpStatusCode.BadRequest:
          this.editForm.setTouched();
          break;
      }
    });
  }
}
