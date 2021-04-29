import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
     PageHeaderComponent
  ],
  exports: [    
    CommonModule,
    ReactiveFormsModule,
    RouterModule,    
    PageHeaderComponent
  ],
  
})
export class SharedModule { }