import { LOCALE_ID, NgModule } from '@angular/core';

import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import localePt from '@angular/common/locales/pt';
import { LoginComponent } from './pages/auth/login/login.component';
import { BasicAuthInterceptor } from './pages/auth/shared/auth.interceptor';
import { ErrorInterceptor } from './pages/auth/shared/error.interceptor';
import { AuthModule } from './pages/auth/auth.module';
import { CountriesModule } from './pages/countries/countries.module';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AuthModule,
    CountriesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }