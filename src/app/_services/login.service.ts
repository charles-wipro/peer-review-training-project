import { EventEmitter, Output } from '@angular/core';
import { Roles } from '../welcome/roles';

export class LoginService {
    _log_ser_loginSubmit = new EventEmitter<string>();

    _log_ser_roles : Roles[]= [
        new Roles('Faculty' , 'Fac1' , 'fac1@fac.com' , 'Fac1pass'),
        new Roles('Trainee' , 'Tra1' , 'tra1@tra.com' , 'Tra1pass'),
        new Roles('Reviewer' , 'Rev1' , 'rev1@rev.com' , 'Rev1pass'),
        new Roles('Admin' , 'Adm1' , 'adm1@adm.com' , 'Adm1pass')
        ];

    _log_ser_selectedRole: string = '';
    _log_ser_userEnteredUsername: string = '';
    _log_ser_userEnteredEmail: string = '';
    _log_ser_userEnteredPassword: string = '';

    _log_ser_setRoleSelected(role) {
        this._log_ser_selectedRole = role.title;
    }
    _log_ser_getRoleSelected() {
        return this._log_ser_selectedRole;
    }

    _log_ser_onSubmit(form) {
        for (let user of this._log_ser_roles) {
            if(user.title === this._log_ser_selectedRole  && user.username === form.value.username && user.email === form.value.email && user.password === form.value.password){
                console.log('login successful');
                document.getElementById('loginModal').click();
                localStorage.clear();
                // break;
            }
            else {
                // console.log('something went wrong');
            }
        }
    }
}