import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginStatus = {status: 'unsuccessful' , role: ''};
  // loginStatus = {status: 'successful' , role: 'Admin'};

  role: string;
  // role: string = 'Admin';
  
  onSubmitteded(loginState) {
    this.loginStatus = loginState;
    this.role = loginState.role;
  }

  onLogOut() {
    this.loginStatus = {status: 'unsuccessful' , role: ''};
  }

}
