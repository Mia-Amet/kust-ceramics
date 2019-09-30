import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CoursesCatalogComponent } from './components/courses-catalog/courses-catalog.component';

const routes: Route[] = [
  { path: 'courses', component: CoursesCatalogComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
