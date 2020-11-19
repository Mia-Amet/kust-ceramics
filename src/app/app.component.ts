import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CoursesService } from './services/courses.service';
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
    private scrollService: ScrollService,
    private coursesService: CoursesService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    if (this.page) this.scrollService.setElement(this.page);

    // this.firestore.collection('courses').valueChanges()
    //   .subscribe((courses: any[]) => {
    //     courses.length ? console.log(courses) : coursesArray.forEach(course => this.coursesService.addCourse(course));
    //   });

    // const json = require('../assets/products.json');
    // const fromJson = Array.prototype.slice.call(JSON.parse(JSON.stringify(json)));
    // const coursesArray = fromJson.map(course => {
    //   return {
    //     ...course,
    //     photos: course.photos.map(link => {
    //       let index = link.indexOf('/assets');
    //       return `.${ link.slice(index).replace(/-/g, "_") }`;
    //     }),
    //     price: {
    //       fullPrice: course.price,
    //       discountPrice: course.price,
    //       hasDiscount: false
    //     }
    //   }
    // });
    
  }
}
