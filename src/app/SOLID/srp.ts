// MAL

import {Component, Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

interface User {
  firstName: string;
  lastName: string;
  fullName: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `
    <div *ngFor="let user of users">
      {{ user.fullName }}
    </div>
  `
})
export class UserListBadComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User[]>('api/users').subscribe(data => {
      this.users = data.map(user => ({
        ...user,
        fullName: user.firstName + ' ' + user.lastName
      }));
    });
  }
}



// BIEN

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users').pipe(
      map(data => data.map(user => ({
        ...user,
        fullName: user.firstName + ' ' + user.lastName
      })))
    );
  }
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `
    <div *ngFor="let user of users">
      {{ user.fullName }}
    </div>
  `
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
