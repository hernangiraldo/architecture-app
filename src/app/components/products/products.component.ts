import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CreditCard} from "../../models/credit-card";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  creditCards: CreditCard[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getCreditCards();
  }

  getCreditCards() {
    const url =
    this.httpClient.get<CreditCard[]>(`${environment.apiBaseUrl}/credit-cards`)
      .subscribe({
        next: (response) => {
          this.creditCards = response;
          // this.creditCards = response.map((creditCard) => {
          //   return {
          //     ...creditCard,
          //     isActivate: creditCard.status !== 'Cancelada' && creditCard.status !== 'CANCELADA'
          //   }
          // });
        }
      })
  }
}
