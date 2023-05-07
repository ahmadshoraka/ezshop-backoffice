import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  addUserProfile(birthdate: string, nationalCode: string) {
    const addUserProfile = {birthdate, nationalCode}
    return this.http.post<any>(environment.authApiUrl + `api/v1/user/profile`, addUserProfile).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
