import React, { Fragment } from 'react';

import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { ReactComponent as Vk } from 'assets/svg/vk.svg';
import { ReactComponent as Insta } from 'assets/svg/insta.svg';

import * as S from './styled';

export const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <S.Layout>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>

        <S.Button>Личный кабинет</S.Button>

        <S.SocialContainer>
          <Vk />
        </S.SocialContainer>
        <S.SocialContainer>
          <Insta />
        </S.SocialContainer>
      </S.Layout>
      {children}
    </Fragment>
  );
};
