export enum QuoteStatus {
  OPEN,
  LOST,
  POSTED,
  CONFIRMED,
  DECLINED
}

export interface Quote {
  id: number;
  idStr: string;
  status: QuoteStatus;
  expirationDate: Date;
  product: string;
  from: string;
  to: string;
}
