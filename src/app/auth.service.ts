import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

    private _loginUrl = 'http://127.0.0.1:3000/login';
    private userId: String;
    constructor(private http: HttpClient) {
    }
    setUrl() {
        this.userId = localStorage.getItem('_id');
        console.log(this.userId);
        return 'http://127.0.0.1:3000/employee/' + this.userId + '/projects';
    }

    loginUser(user) {
        return this.http.post<any>(this._loginUrl, user);
    }

    LoggedIn() {
        return !!localStorage.getItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
