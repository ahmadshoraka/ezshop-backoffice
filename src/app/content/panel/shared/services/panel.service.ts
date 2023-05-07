import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../models/panel.model';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  constructor(private http: HttpClient) {}

  getUserProfile() {
    return this.http.get<UserProfile>(environment.authApiUrl + `api/v1/user/profile`).pipe(
      map((res: UserProfile) => {
        return res;
      })
    );
  }
}
