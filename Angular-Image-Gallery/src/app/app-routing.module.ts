import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllimagesComponent } from './allimages/allimages.component';
import { DisplayoneimageComponent } from './displayoneimage/displayoneimage.component';

const routes: Routes = [
  { path: '', redirectTo: '/allimage', pathMatch: 'full' },
  { path: 'allimage', component: AllimagesComponent },
  { path: 'displayoneimage/:id', component: DisplayoneimageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingcomponents = [AllimagesComponent, DisplayoneimageComponent];
