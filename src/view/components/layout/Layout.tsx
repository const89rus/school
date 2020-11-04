import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Vk } from 'assets/svg/vk.svg';
import { ReactComponent as Insta } from 'assets/svg/insta.svg';

import * as S from './styled';

export const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <S.Layout>
        <S.LogoWrapper>
          <Link to="/">
            <S.Logo />
          </Link>
        </S.LogoWrapper>

        <S.Wrapper>
          <S.Button>Личный кабинет</S.Button>

          <S.SocialContainer>
            <Vk />
          </S.SocialContainer>
          <S.SocialContainer>
            <Insta />
          </S.SocialContainer>
        </S.Wrapper>
      </S.Layout>

      <S.MenuContainer>
        <S.MenuItemWrapper>
          <S.MenuItem to="/#about">о проекте</S.MenuItem>
        </S.MenuItemWrapper>
        <S.MenuItemWrapper>
          <S.MenuItem to="/#team">преподаватели</S.MenuItem>
        </S.MenuItemWrapper>
        <S.MenuItemWrapper>
          <S.MenuItem to="#">партнеры</S.MenuItem>
        </S.MenuItemWrapper>
        <S.MenuItemWrapper>
          <S.MenuItem to="#">анонсы</S.MenuItem>
        </S.MenuItemWrapper>
        <S.MenuItemWrapper>
          <S.MenuItem to="#">СМИ о нас</S.MenuItem>
        </S.MenuItemWrapper>
      </S.MenuContainer>

      {children}
    </Fragment>
  );
};
