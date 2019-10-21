import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private elementSubject: BehaviorSubject<ElementRef> = new BehaviorSubject(null);

  constructor() { }

  scrollDown() {
    if (!this.elementSubject.getValue()) return;

    const currentElement = this.elementSubject.getValue().nativeElement;
    currentElement.scrollIntoView({ behavior: 'smooth' });
  }

  setElement(elRef: ElementRef) {
    this.elementSubject.next(elRef);
  }
}
