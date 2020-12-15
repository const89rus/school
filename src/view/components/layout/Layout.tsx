import React, { Fragment, useMemo, useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { AuthContext } from 'data/auth/AuthContext';

import { ReactComponent as Vk } from 'assets/svg/vk.svg';
import { ReactComponent as Insta } from 'assets/svg/insta.svg';

import * as S from './styled';
import { colors } from 'assets/variables/colors';
interface Props {
  isAuthed?: boolean;
}

export const Layout: React.FC<Props> = ({ children, isAuthed }) => {
  const isLoginPage = useRouteMatch('/login');
  const isRegisterPage = useRouteMatch('/register');

  const colorMenu = useMemo(() => {
    if (!!isRegisterPage || !!isLoginPage) return colors.yellow;

    return colors.darkPrimary;
  }, [isLoginPage, isRegisterPage]);

  const vk = 'https://vk.com/startnow89';
  const insta = 'https://www.instagram.com/start_now89/';

  return (
    <Fragment>
      <S.Layout>
        <S.LogoWrapper>
          <Link to="/">
            <S.Logo />
          </Link>
        </S.LogoWrapper>

        <S.Wrapper>
          <Link to={isAuthed ? '/' : '/login'}>
            <S.Button>Личный кабинет</S.Button>
          </Link>

          <S.SocialContainer>
            <S.Link href={vk}>
              <Vk className="social" />
            </S.Link>
          </S.SocialContainer>
          <S.SocialContainer>
            <S.Link href={insta}>
              <Insta className="social" />
            </S.Link>
          </S.SocialContainer>
        </S.Wrapper>
      </S.Layout>

      {!isAuthed && (
        <S.MenuContainer bgColor={colorMenu}>
          <S.MenuItemWrapper to="/#about">
            <S.MenuItem>о проекте</S.MenuItem>
          </S.MenuItemWrapper>
          <S.MenuItemWrapper to="/#team">
            <S.MenuItem>преподаватели</S.MenuItem>
          </S.MenuItemWrapper>
          <S.MenuItemWrapper to="/#partners">
            <S.MenuItem>партнеры</S.MenuItem>
          </S.MenuItemWrapper>
          <S.MenuItemWrapper to="/#announcement">
            <S.MenuItem>анонсы</S.MenuItem>
          </S.MenuItemWrapper>
          <S.MenuItemWrapper to="/#massmedia">
            <S.MenuItem>СМИ о нас</S.MenuItem>
          </S.MenuItemWrapper>
        </S.MenuContainer>
      )}

      {children}
    </Fragment>
  );
};
