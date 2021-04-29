import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { CountryListComponent } from './pages/countries/country-list/country-list.component';

const routes: Routes = [
  { path: '', component: CountryListComponent },
  { path: 'login', component: LoginComponent },   
  { path: 'countries', loadChildren: () => import('./pages/countries/countries.module').then(m=> m.CountriesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

