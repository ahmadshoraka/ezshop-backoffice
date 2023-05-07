import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CurrentState } from '../models/current-state.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentStateService {

  currentState?: BehaviorSubject<CurrentState | undefined>;
  parentCurrentState?: BehaviorSubject<CurrentState | undefined>;


  constructor(
    private router: ActivatedRoute,
    private route: Router,
  ) { }

  getCurrentState(pageName: string) {

  }

  private backToParent(currentState?: CurrentState) {
    this.parentCurrentState = new BehaviorSubject(currentState);
  }

  saveCurrentState(currentState?: CurrentState, pageName?: string) {
    currentState?.isParent ? this.backToParent(currentState) : null;
    this.currentState = new BehaviorSubject(currentState);
    this.currentState.next(currentState);
    return this.currentState;
  }
  
  isEmpty(obj: CurrentState) {
    const content = Object.values(obj);
    if (content && content.length != 0) {
      for (const iterator of content) {
        if (iterator) {
          return false;
        }
      }
      return true;
    }
  }

  clearObject(obj: any) {
    return Object.keys(obj).forEach(k => delete obj[k]);
  }

  leave(pageName?: string) {
    this.parentCurrentState ? this.parentCurrentState?.subscribe((x) => {
      if (x?.isParent) {
        this.route.url.includes(`${x.parentURl}`) ? this.currentState = this.parentCurrentState : null;
      }
    }) : this.currentState = undefined;
  }
}
