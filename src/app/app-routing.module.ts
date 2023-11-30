import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { AddBookComponent } from './addnewbook/addnewbook.component';

const routes: Routes = [
  {path:'books',component:AllbooksComponent},
  {path :'addbook',component:AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
