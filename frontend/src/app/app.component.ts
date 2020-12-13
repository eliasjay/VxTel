import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ApiService } from './services/api.service'

interface IPlan {
  id: string,
  name: string,
  availableMinutes: number
}

interface ITariff {
  plan_id: string,
  origin: string,
  destination: string,
  durationInMinutes: number
}

interface ITariffResponse {
  withFaleMais: string,
  withoutFaleMais: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'falemais';

  form: FormGroup

  plans: IPlan[] = []
  tariffResponse: ITariffResponse

  errorHandlerMessage: string

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private decimalPipe: DecimalPipe
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      plan_id: null,
      origin: null,
      destination: null,
      durationInMinutes: null
    })

    this.showPlans()
  }
  
  showPlans() {
    this.apiService.showPlans()
      .subscribe((response: IPlan[]) => {
        this.plans = response
      },
      error => {
        this.errorHandlerMessage = error.error.message
        this.timedErrorMessage()
      })
  }

  calculateTariff(tariff: ITariff) {
    this.apiService.calculateTariff(tariff)
      .subscribe((response: ITariffResponse) => {
        this.tariffResponse = { 
          withFaleMais: this.decimalPipe.transform(response.withFaleMais, '1.2-2'),
          withoutFaleMais: this.decimalPipe.transform(response.withoutFaleMais, '1.2-2'),
        }
        console.log('[index]', this.tariffResponse);
      },
      error => {
        this.errorHandlerMessage = error.error.message
        this.timedErrorMessage()
      })
  }

  timedErrorMessage() {
    setTimeout(() => {
      this.errorHandlerMessage = null
    }, 3000);
  }

  submit() {
    this.calculateTariff(this.form.value)
  }
}
