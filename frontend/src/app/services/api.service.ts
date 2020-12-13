import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://127.0.0.1:3000';

interface ITariff {
  plan_id: string,
  origin: string,
  destination: string,
  durationInMinutes: number
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  showPlans() {
    return this.http.get(`${baseUrl}/plans`)
  }

  calculateTariff(tariff: ITariff) {
    return this.http.post(`${baseUrl}/tariffs`, tariff)
  }
}
