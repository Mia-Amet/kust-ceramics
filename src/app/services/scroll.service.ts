import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private elementSubject: BehaviorSubject<ElementRef> = new BehaviorSubject(null);

  constructor() { }

  setElement(elRef: ElementRef) {
    this.elementSubject.next(elRef);
  }

  private currentYPosition(): number {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  }

  private elementYPosition(): number {
    const elem = this.elementSubject.getValue().nativeElement;
    let y = elem.offsetTop;
    let node = elem;

    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }

    return y;
  }

  smoothScroll() {
    const startY = this.currentYPosition();
    const stopY = this.elementYPosition();
    const distance = stopY - startY;

    let speed = Math.round(distance / 75);
    if (speed >= 20) speed = 20;

    let step = Math.round(distance / 50);
    let leapY = startY + step;
    let timer = 0;

    for ( let i = startY; i < stopY; i += step ) {
      setTimeout("window.scrollTo(0, "+leapY+")", timer * speed * 0.25);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
  }
}
