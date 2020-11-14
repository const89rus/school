import valid from 'validator';

export const isValidEmail = (email: string): boolean => valid.isEmail(email);

export const isValidPassword = (password: string): boolean => {
  if (!password) return false;

  if (!valid.isAlphanumeric(password, 'en-US')) return false;

  return true;
};
