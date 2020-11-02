import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styled';

export type Button = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends Button {
  appearance?: 'primary' | 'secondary';
}

export const Button: React.FC<Props> = ({ children, appearance = 'primary', ...rest }) => {
  return (
    <S.Button {...rest} appearance={appearance}>
      {children}
    </S.Button>
  );
};
