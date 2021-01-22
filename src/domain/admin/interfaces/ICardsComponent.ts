export interface ICardsComponent {
  //data: any;
  loading: boolean;
  errors?: string;
  list?: unknown;
  onUpdate: (fields: CardsFields) => void;
}

export interface CardsFields {
  img: any;
  name: string;
  position: string;
}
