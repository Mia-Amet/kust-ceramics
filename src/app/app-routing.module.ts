import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';

const routes: Route[] = [
  { path: 'courses', component: HomeComponent },
  { path: 'courses/:courseId', component: CourseComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
