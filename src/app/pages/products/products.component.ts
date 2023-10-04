import {Component, OnInit} from '@angular/core';
import {CreditCard} from "../../models/credit-cards";
import {CreditCardsService} from "../../services/credit-cards.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  creditCards: CreditCard[] = [];

  constructor(
    private creditCardsSvc: CreditCardsService
  ) {
  }

  ngOnInit(): void {
    this.getCreditCards();
  }

  getCreditCards(): void {
    this.creditCardsSvc.getCreditCards().subscribe(creditCards => {
      this.creditCards = creditCards;
    });
  }
}
