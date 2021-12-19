import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStoryComponent } from './components/add-story/add-story.component';
import { DetailsStoryComponent } from './components/details-story/details-story.component';
import { ShowStoryComponent } from './components/show-story/show-story.component';


const homeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'show',
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddStoryComponent
  },
  {
    path: 'details',
    component: DetailsStoryComponent,
  },

  {
    path: 'show',
    component: ShowStoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
