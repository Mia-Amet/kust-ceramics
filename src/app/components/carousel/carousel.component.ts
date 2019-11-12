import { Component, OnInit, Input } from '@angular/core';
import { CarouselService } from '../../services/carousel.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [CarouselService]
})
export class CarouselComponent implements OnInit {
  activeIndex: Observable<number>;
  index = 0;

  @Input() pics: string[];
  @Input() courseName: string;

  constructor(
    private carouselService: CarouselService
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

    const options: KeyframeAnimationOptions = {
      duration: 500,
      easing: 'ease-in-out',
      fill: 'forwards'
    };

    if (index > this.index) {
      currentSlide.animate([
        { transform: `translateX(0)` },
        { transform: `translateX(-100%)` }
      ], options);
      nextSlide.animate([
        { transform: `translateX(100%)` },
        { transform: `translateX(0)` }
      ], options);
    } else {
      currentSlide.animate([
        { transform: `translateX(0)` },
        { transform: `translateX(100%)` }
      ], options);
      nextSlide.animate([
        { transform: `translateX(-100%)` },
        { transform: `translateX(0)` }
      ], options);
    }

    this.carouselService.emitIndex(index);
    this.index = index;
  }
}
