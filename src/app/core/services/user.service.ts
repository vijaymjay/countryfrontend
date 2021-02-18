import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { map ,  distinctUntilChanged } from 'rxjs/operators';
import { environment } from './../../../environments/environment';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<any>({});
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private http: HttpClient,
  ) {}



  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  setAuth(user: any) {

    window.localStorage['userinfo'] = user;
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  attemptAuth(authtype:any,credentials:any):Observable<any> {
      const route = (authtype === 'login') ? '/login' : '';
       return this.http.post<any>(`${environment.apiurl}user${route}`,{user: credentials})
      .pipe(map(data=>{
        this.setAuth(data);
        return data;
      }))
  }

  
}
