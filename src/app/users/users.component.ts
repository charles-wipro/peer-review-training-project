import { Component, OnInit } from '@angular/core';
import { Roles } from '../welcome/roles';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Roles[] = this.userServ._log_ser_roles;

  newUserRole: string;
  newUserName: string;
  newUserEmail: string;
  newUserPassword: string;

  onSetNewUserRole(selection) {
    this.newUserRole = selection;
  }

  onNewUserAdded() {
    this.users.push(new Roles(this.newUserRole , this.newUserName , this.newUserEmail , this.newUserPassword));
    console.log(this.users);
  }

  constructor(private userServ: LoginService) { }

  ngOnInit() {
  }

}
