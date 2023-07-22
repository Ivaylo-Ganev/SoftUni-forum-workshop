import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  user: User | undefined
  USER_KEY = '[user]';

  get isLogged() {
    return !!this.user;
  }

  private user$$ = new BehaviorSubject<User | undefined>(undefined)

  public user$ = this.user$$.asObservable()

  subscription: Subscription

  constructor(private http: HttpClient) { 
    // try {
    //   const lsUser = localStorage.getItem(this.USER_KEY) || '';
    //   this.user = JSON.parse(lsUser)
    // } catch(error) {
    //   this.user = undefined;
    // }
    this.subscription = this.user$.subscribe(user => this.user = user)
  }

  login(email: string, password: string) {
    // this.user = {
    //   email: 'john.doe@gmail.com',
    //   firstName: 'John'
    // }
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    return this.http.post<User>('/api/login', {email, password}).pipe(tap(user => this.user$$.next(user)))

  }

  register(username: string, email: string, password: string, rePassword: string, tel: string) {
    // this.user = {
    //   email: 'john.doe@gmail.com',
    //   firstName: 'John'
    // }
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));


    return this.http.post<User>('/api/register', {username, email, password, rePassword, tel}).pipe(tap(user => this.user$$.next(user)))
  }

  logout() {
    // this.user = undefined;
    // localStorage.removeItem(this.USER_KEY);
    return this.http.post<User>('/api/logout', {}).pipe(tap(user => this.user$$.next(undefined)))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
