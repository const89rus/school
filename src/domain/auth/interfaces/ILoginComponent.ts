export interface ILoginComponent {
  onLogin: (fields: FormFields) => void;
}

export interface FormFields {
  login: string;
  password: string;
}
