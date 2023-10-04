export interface CreditCard {
  name: string;
  number: string;
  limitRd: number;
  balaceRd: number;
  balanceUsd?: number;
  limitUsd?: number;
  brand: 'Visa' | 'Master' | 'Amex';
  validDate: string;
  status: string;
  isActive: string
}
