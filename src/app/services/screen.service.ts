import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private readonly _resize$: Observable<number>;

  constructor() {
    this._resize$ = fromEvent(window, 'resize').pipe(
      debounceTime(100),
      map(() => window.innerWidth),
      distinctUntilChanged(),
      startWith(window.innerWidth)
    );
  }

  public get resize$(): Observable<number> {
    return this._resize$;
  }
}
