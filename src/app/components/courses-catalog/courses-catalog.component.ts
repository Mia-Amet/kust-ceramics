import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-courses-catalog',
  templateUrl: './courses-catalog.component.html',
  styleUrls: ['./courses-catalog.component.scss']
})
export class CoursesCatalogComponent implements OnInit {
  courses: Observable<Course[]>;

  constructor(
    private fireStore: AngularFirestore,
  ) { }

  ngOnInit() {
    this.courses = this.fireStore.collection('courses')
      .get()
      .pipe(
        map(querySnapshot => querySnapshot.docs.map(doc => <Course>doc.data()))
      );
  }

}
