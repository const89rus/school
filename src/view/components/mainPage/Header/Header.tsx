import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { Overlay, ParallaxCache } from 'view/common';

import appolon from 'assets/img/appolon.png';

import * as S from './styled';

export const Header: React.FC = () => {
  return (
    <S.Wrapper id="#about">
      <Overlay />
      <S.XLargeParallax>
        <Parallax y={[0, 50]}>
          <ParallaxCache />
          <S.Img src={appolon} />
        </Parallax>
      </S.XLargeParallax>
      <S.LargeParallax>
        <Parallax y={[-15, 15]}>
          <ParallaxCache />
          <S.Img src={appolon} />
        </Parallax>
      </S.LargeParallax>

      <S.HeaderContent>
        <Parallax y={[15, -15]}>
          <S.AboutHeader>Это только начало!</S.AboutHeader>
          <S.AbaoutParagraph>
            Бесплатный онлайн-курс для школьников, которые планируют поступление в вузы по направлению «Журналистика»
          </S.AbaoutParagraph>
          <S.AbaoutParagraph>
            Наша миссия - подготовить школьников к творческим экзаменам в вузах, а также познакомить с профессией
            журналист.
          </S.AbaoutParagraph>
          <S.ListHeader>Что ждёт участников курса?</S.ListHeader>
          <S.List>
            <S.ListItem>
              <S.ListItemSpan>Более 30 онлайн-занятий;</S.ListItemSpan>
            </S.ListItem>
            <S.ListItem>
              <S.ListItemSpan>спикеры из разных уголков страны;</S.ListItemSpan>
            </S.ListItem>
            <S.ListItem>
              <S.ListItemSpan>домашние задания для создания личного портфолио;</S.ListItemSpan>
            </S.ListItem>
            <S.ListItem>
              <S.ListItemSpan>знакомство с новыми людьми.</S.ListItemSpan>
            </S.ListItem>
          </S.List>
        </Parallax>
      </S.HeaderContent>
    </S.Wrapper>
  );
};
