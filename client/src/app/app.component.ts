import {Component} from '@angular/core';
import {environment} from '../enviroments/environment';
import {TokenStorageService} from './service/token/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private role: string = '';

  authenticated = false;
  editAccess = false;
  login?: string;

  constructor(private tokenStorageService: TokenStorageService) {

  }

  ngOnInit(): void {
    this.authenticated = !!this.tokenStorageService.getToken();

    if (this.authenticated) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      this.login = user.login;

      this.editAccess = this.role == 'ADMIN';
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();

    if (environment.production) {
      window.location.href = "/bank"
    } else {
      window.location.reload();
    }
  }

}
