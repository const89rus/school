export interface IEditComponent {
  errorsMessage?: string;
  onEdit: (fields: FormFields) => Promise<void>;
}

export interface FormFields {
  email: string;
  password: string;
  name: string;
  age: string;
  city: string;
  study: string;
  social: string;
  repeat: string;
}
