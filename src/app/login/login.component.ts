import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginUserData = {};

    constructor(private _auth: AuthService,
                private _router: Router) {
    }

    ngOnInit() {
    }

    loginUser() {
        console.log(this.loginUserData);
        this._auth.loginUser(this.loginUserData)
            .subscribe(
                res => {
                    console.log(res);
                    console.log('something');
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('auth-user', JSON.stringify(res.user));
                    this._router.navigate(['/projects']);
                },
                err => console.log(err)
            );
    }
}
