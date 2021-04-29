  
import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryFormComponent } from './country-form/country-form.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { BasicAuthInterceptor } from '../auth/shared/auth.interceptor';
import { ErrorInterceptor } from '../auth/shared/error.interceptor';


@NgModule({
  imports: [
    SharedModule,
    CountriesRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  declarations: [CountryListComponent, CountryFormComponent],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class CountriesModule { }