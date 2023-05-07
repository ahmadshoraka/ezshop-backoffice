import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  sideNav = new Subject<boolean>();

  constructor() { }

  sadeNavShowing(sideNav: boolean){
    this.sideNav.next(sideNav);
  }
}
