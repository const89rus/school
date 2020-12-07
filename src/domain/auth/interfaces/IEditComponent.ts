import { UserProfile } from 'domain/account/interfaces';
export interface IEditComponent {
  errorsMessage?: string;
  profile: UserProfile;
  userUpdate: (fields: FormFields) => Promise<void>;
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
