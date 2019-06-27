import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() logoutEvent = new EventEmitter<string>();

  @Input() selectedRole: string;

  facultyClass: string = this.selectedRole;
  traineeClass: string = this.selectedRole;
  reviewerClass: string = this.selectedRole;
  adminClass: string = this.selectedRole;

  constructor(public loginServ: LoginService) {  }

  ngOnInit() {
  }

  logout() {
    console.log("LOGGED OUT");
    this.selectedRole = '';
    this.logoutEvent.emit('unsuccessful');
  }

}
