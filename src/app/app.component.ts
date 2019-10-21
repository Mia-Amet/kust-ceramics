import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KUST';

  @ViewChild('page', { static: true }) page: ElementRef;

  constructor(
    private scrollService: ScrollService
  ) { }

  ngOnInit(): void {
    if (this.page) this.scrollService.setElement(this.page);
  }
}
