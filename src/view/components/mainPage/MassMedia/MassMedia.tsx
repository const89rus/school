import React from 'react';

import { Section } from 'view/common';
import { Video } from 'view/common';
import { Post } from 'view/common';

import { colors } from 'assets/variables/colors';

import * as S from './styled';

export const MassMedia: React.FC = () => {
  return (
    <Section header="СМИ о нас" variant={colors.yellow} headerVariant={colors.primary} contentVariant={colors.primary}>
      <S.Wrapper id="massmedia">
        <S.Line>
          <S.VideoWrapper>
            <Video
              src="https://www.youtube.com/embed/89pc-pdR7Ps"
              headline="Как делать КРАСИВЫЕ ФОТОГРАФИИ на любой фотоаппарат"
            />
          </S.VideoWrapper>
          <Post headline="название статьи" post="сюда встраивается часть статьи"></Post>
        </S.Line>
        <S.Line>
          <Post headline="название статьи" post="сюда встраивается часть статьи"></Post>
          <S.VideoWrapper>
            <Video
              src="https://www.youtube.com/embed/89pc-pdR7Ps"
              headline="Как делать КРАСИВЫЕ ФОТОГРАФИИ на любой фотоаппарат"
            />
          </S.VideoWrapper>
        </S.Line>
      </S.Wrapper>
    </Section>
  );
};
