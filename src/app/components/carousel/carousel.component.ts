import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarouselService } from '../../services/carousel.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [ CarouselService ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  activeIndex: Observable<number>;
  index = 0;

  @Input() pics: string[];
  @Input() courseName: string;

  constructor(
    private carouselService: CarouselService,
    private scrollService: ScrollService
  ) { }

  ngOnInit() {
    this.activeIndex = this.carouselService.activeSlideIndex;
  }

  onSwipeLeft(event, paneElement: Element) {
    const index = this.index < this.pics.length - 1 ? this.index + 1 : 0;
    this.slideToIndex(index, paneElement);
    this.index = index;
  }

  onSwipeRight(event, paneElement: Element) {
    const index = this.index > 0 ? this.index - 1 : this.pics.length - 1;
    this.slideToIndex(index, paneElement);
    this.index = index;
  }

  slideToIndex(index: number, paneElement: Element) {
    if (index === this.index) return;

    const slides = Array.prototype.slice.call(paneElement.children);
    const currentSlide = slides.find(slide => slide.classList.contains('active'));
    const nextSlide = slides[index];

    if (index > this.index) {
      currentSlide.classList.add('to-left');
      nextSlide.classList.add('from-left');
    } else {
      currentSlide.classList.add('to-right');
      nextSlide.classList.add('from-right');
    }

    setTimeout(() => {
      currentSlide.classList.remove('to-right', 'to-left');
      nextSlide.classList.remove('from-left', 'from-right');
    }, 510);

    this.carouselService.emitIndex(index);
    this.index = index;
  }
}
