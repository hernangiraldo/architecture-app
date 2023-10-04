import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreditCardComponent} from "./components/credit-card/credit-card.component";

@NgModule({
  declarations: [
    CreditCardComponent
  ],
  exports: [
    CreditCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
