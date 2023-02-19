import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(private _apiServise: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.detail();
  }

  detail() {
    this.route.params.subscribe((params) => {
      this._apiServise.detail({ id: (Number(params['id']) || 0), token: '' })
        .subscribe(r => console.log(r));
    });
  }
}
