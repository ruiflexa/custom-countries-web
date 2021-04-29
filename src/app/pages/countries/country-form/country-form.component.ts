import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../shared/country.model';
import { CountryService } from '../shared/country.service';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  currentCountry: Country;
  currentCustomCountry: Country;
  countryToUpdate: Country;
  message = '';

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCountry(this.route.snapshot.paramMap.get('id'));
    this.getCustomCountry(this.route.snapshot.paramMap.get('id'));
  }

  getCountry(id: any): void {
    this.countryService.get(id)
      .subscribe(
        data => {
          this.currentCountry = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getCustomCountry(id: any): void {
    this.countryService.get(`custom/${id}`)
      .subscribe(
        data => {
          this.currentCustomCountry = data;
        },
        error => {
          console.log(error);
        });
  }

  updateCountry(currentCountryToUpdate: any): void {
    this.countryToUpdate = currentCountryToUpdate;
    this.countryToUpdate.area = Number(currentCountryToUpdate.area);
    this.countryToUpdate.population = Number(currentCountryToUpdate.population);
    this.countryToUpdate.populationDensity = Number(currentCountryToUpdate.populationDensity);
    this.countryToUpdate.capital = currentCountryToUpdate.capital;
    this.countryService.put('', this.countryToUpdate, this.route.snapshot.paramMap.get('id').toString())
      .subscribe(
        response => {
          console.log(response);
          this.message = 'País atualizado com sucesso!';
          setTimeout(() => {
            this.router.navigate(["/countries"]);
          }, 2000);
        },
        error => {
          console.log(error);
        });
  }

  back(): void {
    this.router.navigate(['/countries']);
  }
}
