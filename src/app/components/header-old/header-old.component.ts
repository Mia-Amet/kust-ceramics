import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScreenService } from '../../services/screen.service';
import { Observable } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header-old',
  templateUrl: './header-old.component.html',
  styleUrls: ['./header-old.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
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
export class HeaderOldComponent implements OnInit {
  closed = true;
  screen$: Observable<number>;

  constructor(
    private screenService: ScreenService
  ) { }

  ngOnInit() {
    this.screen$ = this.screenService.resize$;
  }

  closeOnClick() {
    this.closed = true;
  }
}
