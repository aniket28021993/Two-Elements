import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
