import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${environment.gorest_token}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://gorest.co.in/public/v2/users';

  constructor(private http: HttpClient) {}

  //GET A LIST OF USERS
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  //GET A SPECIFIC USER BY IT'S ID
  getSpecificUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  //ADD USER -->Id is assigned automatically by the api (incremental)
  addUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }

  //Delete a user by it's ID
  deleteUser(user: User): Observable<User> {
    //We're passing all the data but this can be also performed by passing only the id
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.delete<User>(url);
  }

  //Toggle user's status on dblClick
  updateUserStatus(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<User>(url, user, httpOptions);
  }
}
