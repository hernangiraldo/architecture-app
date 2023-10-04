import {Component, Input} from '@angular/core';
import {CreditCard} from "../../../models/credit-cards";

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent {
  @Input({required: true}) creditCard!: CreditCard;
}
