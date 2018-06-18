import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';


@Injectable()
export class ProjectService {

    private _projectsUrl = 'http://127.0.0.1:3000/employee/5b181a64be2d3019805b8549/projects/';

    constructor(private http: HttpClient, private auth: AuthService ) {
    }
    getProjects() {
        this._projectsUrl = this.auth.setUrl();
        return this.http.get<any>(this._projectsUrl);
    }
}
