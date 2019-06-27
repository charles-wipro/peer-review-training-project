import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Roles } from './roles';
import { NgForm } from '@angular/forms';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Output() loginSubmit = new EventEmitter<{}>();//event broadcaster to other components

  roles: Roles[] = this.loginServ._log_ser_roles;
  selectedRole: string;

  constructor(private loginServ: LoginService) { console.log("Roles= " , this.loginServ._log_ser_roles) }

  ngOnInit() { }

  onRoleSelected(role) {
    this.loginServ._log_ser_setRoleSelected(role);
    this.selectedRole = this.loginServ._log_ser_getRoleSelected();
  }
  onSubmit(form: NgForm) {
    this.loginServ._log_ser_onSubmit(form);
    this.loginSubmit.emit({status: 'successful', role: this.selectedRole});
  }

}
