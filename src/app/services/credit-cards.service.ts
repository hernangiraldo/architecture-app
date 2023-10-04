import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreditCard} from "../models/credit-cards";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCreditCards(): Observable<CreditCard[]> {
    return this.httpClient.get<CreditCard[]>(`${environment.apiBaseUrl}/credit-cards`);
  }
}
