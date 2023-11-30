import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { AddBookComponent } from './addnewbook/addnewbook.component';

@NgModule({
  declarations: [
    AppComponent,
    
    AllbooksComponent,
       
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule  ,
    CommonModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
