import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { UserLogin } from './user-login.model';



@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<UserLogin>('/api/login', { email, password }).pipe(
        shareReplay()
      );
  }
}

