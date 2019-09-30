import { Directive, ElementRef, HostListener } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Directive({
  selector: '[appHoverListener]',
  exportAs: 'appHoverListener'
})
export class HoverListenerDirective {
  private mouseOverSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public mouseOver: Observable<boolean> = this.mouseOverSubject.asObservable();

  constructor(
    private elRef: ElementRef
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.mouseOverSubject.next(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.mouseOverSubject.next(false);
  }

}
