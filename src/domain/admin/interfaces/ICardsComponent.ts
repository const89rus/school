export interface ICardsComponent {
  errors?: string;
  list?: any;
  onUpdate: (fields: CardsFields) => Promise<void>;
}

export interface CardsFields {
  img: any;
  name: string;
  position: string;
}
