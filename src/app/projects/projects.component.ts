import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [];
  constructor(private _projectService: ProjectService,
              private _router: Router) { }

  ngOnInit() {
    this._projectService.getProjects()
        .subscribe(
            res => this.projects = res,
            err => {
              if (err instanceof HttpErrorResponse) {
                if (err.status === 401 ) {
                   this. _router.navigate(['/login']);
                }
              }
            }
        );
  }

}
