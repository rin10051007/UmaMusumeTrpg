import { Component } from '@angular/core';
import { Item, LocalStorageService } from '../../../../../dist/common';
import { User } from './models/user.model';
import { ApiService } from './services/api.service';

@Component({
  selector: 'AuthControl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private apiService: ApiService, private lsService: LocalStorageService) { }
  login() {
    const user: User = {
      loginId: 'admin',
      password: 'AdminPassword'
    }

    this.apiService.login(user).subscribe(r => {
      this.lsService.setInfo(r.loginItem as unknown as Item);
    })
  }
}
