import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private readonly _resize$: Observable<number>;
  private readonly _scroll$: Observable<number>;

  constructor() {
    this._resize$ = fromEvent(window, 'resize').pipe(
      debounceTime(100),
      map(() => window.innerWidth),
      distinctUntilChanged(),
      startWith(window.innerWidth)
    );

    this._scroll$ = fromEvent(window, 'scroll').pipe(
      debounceTime(10),
      map(() => window.pageYOffset),
      distinctUntilChanged(),
      startWith(0)
    );
  }

  public get resize$(): Observable<number> {
    return this._resize$;
  }

  public get scroll$(): Observable<number> {
    return this._scroll$;
  }
}
