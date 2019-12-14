import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { ScreenService } from '../../services/screen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('border-animation', [
      state('true', style({ 'stroke-dashoffset': 2200 })),
      transition('* => true', animate('.5s ease-out')),
      transition('true => *',
        animate('.5s ease-in', style({ 'stroke-dashoffset': 0 })))
    ]),
    trigger('leaf-animation', [
      state('true', style({ transform: 'translateX(0) translateY(600%) rotate(0)', opacity: 0 })),
      transition('* => true', animate('.5s ease-out',
        keyframes([
          style({ transform: 'translateX(50%) translateY(50%) rotate(50deg)', opacity: 1 }),
          style({ transform: 'translateX(50%) translateY(480%) rotate(360deg)', opacity: 1 }),
          style({ transform: 'translateX(50%) translateY(600%) rotate(480deg)', opacity: 0 })
        ]))),
      transition('true => *', [
        style({ transform: 'translateX(0) translateY(0) rotate(0deg) scale(.1)', opacity: 0 }),
        animate('.25s ease-in',
          style({ transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)', opacity: 1 }))
      ])
    ]),
    trigger('fade-animation', [
      transition(':enter', [
        style({ 'fill-opacity': 0 }),
        animate('.3s ease-in', style({ 'fill-opacity': '*' }))
      ]),
      transition(':leave', [
        style({ 'fill-opacity': '*' }),
        animate('.3s ease-out', style({ 'fill-opacity': 0 }))
      ])
    ]),
    trigger('slide-animation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('.5s cubic-bezier(.82,.02,.52,.91)', style({ transform: '*' }))
      ]),
      transition(':leave', [
        style({ transform: '*' }),
        animate('.5s cubic-bezier(.82,.02,.52,.91)', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  menuIsOpen = false;
  screen: Observable<number>;

  constructor(
    private screenService: ScreenService
  ) { }

  ngOnInit() {
    this.screen = this.screenService.resize$;
  }

}
