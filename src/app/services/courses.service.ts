import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  // private _collection: AngularFirestoreCollection<Course>;

  constructor(
    private fireStore: AngularFirestore
  ) { }

  private get collection(): AngularFirestoreCollection<Course> {
    return this.fireStore.collection('courses');
  }

  // private getCollection(name: string) { 
  //   return this.fireStore.collection(name).valueChanges();
  // }

  addCourse(course: Course) { 
    this.collection.add(course);
  }
  
  deleteCourse() { }
}
