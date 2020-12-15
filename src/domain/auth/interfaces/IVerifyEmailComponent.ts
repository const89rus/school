export interface IVerifyEmailComponent {
  Verify: (fields: FormFields) => void;
}

export interface FormFields {
  email: string;
}
