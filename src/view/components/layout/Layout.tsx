import React, { Fragment, useMemo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { ReactComponent as Vk } from 'assets/svg/vk.svg';
import { ReactComponent as Insta } from 'assets/svg/insta.svg';

import * as S from './styled';
import { colors } from 'assets/variables/colors';

export const Layout: React.FC = ({ children }) => {
  const isLoginPage = useRouteMatch('/login');
  const isRegisterPage = useRouteMatch('/register');

  const colorMenu = useMemo(() => {
    if (!!isRegisterPage || !!isLoginPage) return colors.yellow;

    return colors.darkPrimary;
  }, [isLoginPage, isRegisterPage]);

  return (
    <Fragment>
      <S.Layout>
        <S.LogoWrapper>
          <Link to="/">
            <S.Logo />
          </Link>
        </S.LogoWrapper>

        <S.Wrapper>
          <Link to="/login">
            <S.Button>Личный кабинет</S.Button>
          </Link>

          <S.SocialContainer>
            <Vk />
          </S.SocialContainer>
          <S.SocialContainer>
            <Insta />
          </S.SocialContainer>
        </S.Wrapper>
      </S.Layout>

      <S.MenuContainer bgColor={colorMenu}>
        <S.MenuItemWrapper>
          <S.MenuItem to="/#about">о проекте</S.MenuItem>
        </S.MenuItemWrapper>
        <S.MenuItemWrapper>
          <S.MenuItem to="/#team">преподаватели</S.MenuItem>
        </S.MenuItemWrapper>
        <S.MenuItemWrapper>
          <S.MenuItem to="/#partners">партнеры</S.MenuItem>
        </S.MenuItemWrapper>
        <S.MenuItemWrapper>
          <S.MenuItem to="/#announcement">анонсы</S.MenuItem>
        </S.MenuItemWrapper>
        <S.MenuItemWrapper>
          <S.MenuItem to="/#massmedia">СМИ о нас</S.MenuItem>
        </S.MenuItemWrapper>
      </S.MenuContainer>

      {children}
    </Fragment>
  );
};
