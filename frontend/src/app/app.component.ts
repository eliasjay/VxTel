import { Component, OnInit } from '@angular/core';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'falemais';

  plans: IPlan[] = []
  tariffResponse: ITariff

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.showPlans()
  }
  
  showPlans() {
    this.apiService.showPlans()
      .subscribe((response: IPlan[]) => {
        this.plans = response
        console.log('[show]', this.plans)
      },
      error => {
        console.error('[show]', error);
      })
  }

  calculateTariff(tariff: ITariff) {
    this.apiService.calculateTariff(tariff)
      .subscribe((response: ITariff) => {
        this.tariffResponse = response
        console.log('[index]', this.tariffResponse);
      },
      error => {
        console.error('[index]', error);
      })
  }
}
