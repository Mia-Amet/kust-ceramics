import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CarouselService {
  private prevValue = 0;

  private activeSlideIndexSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  public activeSlideIndex: Observable<number> = this.activeSlideIndexSubject.asObservable();

  constructor() { }

  emitIndex(index: number) {
    this.prevValue = this.activeSlideIndexSubject.getValue();
    this.activeSlideIndexSubject.next(index);
  }
}
