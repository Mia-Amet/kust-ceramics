import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CourseDescription } from '../../models/Course';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('collapse-animation', [
      transition(':enter', [
        style({ height: 0, opacity: 1 }),
        animate('.3s ease-in-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1 }),
        animate('.3s ease-in-out', style({ height: 0, opacity: 0 }))
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
