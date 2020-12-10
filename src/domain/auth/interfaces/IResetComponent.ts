export interface IResetComponent {
  onReset: (fields: FormFields) => Promise<void>;
}

export interface FormFields {
  email: string;
}
