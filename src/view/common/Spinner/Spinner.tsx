import React from 'react';

import { ReactComponent as Preloader } from 'assets/svg/preloader.svg';

import * as S from './styled';

export const Spinner: React.FC = () => {
  return (
    <S.SpinnerWrapper>
      <Preloader />
    </S.SpinnerWrapper>
  );
};
