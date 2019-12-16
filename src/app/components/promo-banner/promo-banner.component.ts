import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-promo-banner',
  templateUrl: './promo-banner.component.html',
  styleUrls: ['./promo-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('leaf-rotation', [
      transition(':increment', [
        style('*'), animate('.8s cubic-bezier(.82,.02,.42,.91)',
          keyframes([
            style({ transform: 'rotate3d(-1, 1, 0, -180deg)' }),
            style({ transform: 'rotate3d(-1, 1, 0, 180deg)' })
          ])
        )
      ])
    ])
  ]
})
export class PromoBannerComponent implements OnInit {
  leafTimer = 0;

  constructor(
    private scrollService: ScrollService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.leafTimer++;
      setInterval(() => {
        this.leafTimer += 1;
      }, 8000);
    }, 1000);
  }

  scrollDown() {
    this.scrollService.smoothScroll();
  }
}
