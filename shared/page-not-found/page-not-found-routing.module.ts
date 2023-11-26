import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

const Routes = [
  {
     path: '',
     component: PageNotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
