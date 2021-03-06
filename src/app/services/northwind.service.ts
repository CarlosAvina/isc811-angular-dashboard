import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

const URL_API = environment.API.EndPoint.Northwind;

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {

  constructor(private http: HttpClient) { }

  getTop5(dimension: string, orden: string) {
    return this.http.get(`${URL_API}Top5/${dimension}/${orden}`);
  }

  getSerieHistorica() {

  }

  getCustomers() {
    return this.http.get(`./assets/json/clientes.json`);
  }
}
