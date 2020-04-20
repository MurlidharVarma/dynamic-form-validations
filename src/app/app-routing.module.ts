import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgTabFormsComponent } from './ui/components/ng-tab-forms/ng-tab-forms.component';
import { TabFormsComponent } from './ui/components/tab-forms/tab-forms.component';


const routes: Routes = [
  {path: 'tabs', component: NgTabFormsComponent},
  {path:'tabForm', component: TabFormsComponent},
  {path: '', pathMatch: 'full', redirectTo:'tabs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
