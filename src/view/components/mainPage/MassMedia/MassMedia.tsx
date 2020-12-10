import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { Section, Video, Post, ParallaxCache } from 'view/common';

import { colors } from 'assets/variables/colors';

import * as S from './styled';

export const MassMedia: React.FC = () => {
  return (
    <Section
      header="СМИ о нас"
      variant={colors.yellow}
      headerVariant={colors.primary}
      contentVariant={colors.primary}
      id="massmedia"
    >
      <S.Wrapper>
        <Parallax y={[5, 0]}>
          <ParallaxCache />
          <S.Line>
            <S.VideoWrapper>
              <Video src="89pc-pdR7Ps" headline="Как делать КРАСИВЫЕ ФОТОГРАФИИ на любой фотоаппарат" />
            </S.VideoWrapper>
            <Post headline="название статьи" post="сюда встраивается часть статьи"></Post>
          </S.Line>
        </Parallax>
        <Parallax y={[10, 0]}>
          <ParallaxCache />
          <S.Line>
            <Post headline="название статьи" post="сюда встраивается часть статьи"></Post>
            <S.VideoWrapper>
              <Video src="89pc-pdR7Ps" headline="Как делать КРАСИВЫЕ ФОТОГРАФИИ на любой фотоаппарат" />
            </S.VideoWrapper>
          </S.Line>
        </Parallax>
      </S.Wrapper>
    </Section>
  );
};
