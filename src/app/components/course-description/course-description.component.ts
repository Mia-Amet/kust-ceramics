import { Component, Input, OnInit } from '@angular/core';
import { CourseDescription } from '../../models/Course';
import { animate, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss'],
  animations: [
    trigger('collapse-animation', [
      transition(':enter', [
        style({ height: 0 }),
        animate('.2s ease-out', style({ height: '*' }))
      ]),
      transition(':leave', [
        style({ height: '*' }),
        animate('.2s ease-in', style({ height: 0 }))
      ])
    ])
  ]
})
export class CourseDescriptionComponent implements OnInit {
  collapse = true;

  @Input() description: CourseDescription;

  constructor() { }

  ngOnInit() {
  }

}
