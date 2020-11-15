export interface ILoginComponent {
  errorsMessage?: string;
  onLogin: (fields: FormFields) => void;
}

export interface FormFields {
  login: string;
  password: string;
}
