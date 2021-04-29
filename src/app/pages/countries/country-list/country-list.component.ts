import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseListComponent } from 'src/app/shared/components/page-header/base-list/base-list.component';
import { Country } from '../shared/country.model';
import { CountryService } from '../shared/country.service';
declare var $:any;
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent extends BaseListComponent<Country> {
  
  name: string = '';
  countries: any[];
  currentCountry = null;
  currentIndex = -1;
  
  page = 1;
  count = 0;
  pageSize = 6;
  pageSizes = [6, 12, 18];

  constructor(private countryService: CountryService, private router: Router) {
    super(countryService);    

   }

  ngOnInit(): void {
    this.searchCountries();
    $('[data-toggle="tooltip"]').tooltip();
  }

  searchCountries(){
    this.countryService.get('?name=' + this.name).subscribe((results: any) => {
      this.countries = results;
      this.currentCountry = null;
    });
  }

  selectCountry(country: any, index: number): void {
    this.currentCountry = country;
    this.currentIndex = index;
  }

  editCountry(country: any):void{
    this.router.navigate(['/countries/edit/', country.id]);
  }

  handlePageChange(event: any): void {
    this.page = event;
    this.searchCountries();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.searchCountries();
  }
}
