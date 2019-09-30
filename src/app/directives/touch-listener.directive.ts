import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Directive({
  selector: '[appTouchListener]',
  exportAs: 'appTouchListener'
})
export class TouchListenerDirective {
  menuOpen = false;
  private touchSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.menuOpen);
  public touch: Observable<boolean> = this.touchSubject.asObservable();

  constructor(
    private elRef: ElementRef
  ) { }

  @HostListener('touchstart') onMouseEnter() {
    this.menuOpen = !this.menuOpen;
    this.touchSubject.next(this.menuOpen);
  }

}
