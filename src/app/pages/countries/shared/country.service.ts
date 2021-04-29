import { Injectable, Injector } from '@angular/core';
import { Country } from "./country.model";

import { BaseService } from "./../../../shared/services/base.service";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseService<Country> {

  constructor(http: HttpClient) {
    super(http, "countries");
  }

}