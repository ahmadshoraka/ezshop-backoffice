import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, timer, of } from "rxjs";
import { flatMap } from "rxjs/operators";

export class EzpPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        const loadRoute = (delay: any) => delay
            ? timer(2000).pipe(flatMap(_ => load()))
            : load();
        return route.data && route.data["preloading"]
            ? loadRoute(route.data["delay"])
            : of(null);
      }
  }
