import React from 'react';

import * as S from './styled';
import { Section } from 'view/common';

import partner1 from 'assets/img/Logotip_zalivka_belaya 1.png';
import partner2 from 'assets/img/arktik_media.png';

import { colors } from 'assets/variables/colors';

export const Partners: React.FC = () => {
  return (
    <Section
      header="Партнеры"
      variant={colors.darkPrimary}
      headerVariant={colors.yellow}
      contentVariant={colors.yellow}
    >
      <S.Wrapper>
        <S.Img src={partner1} alt="logo" />
        <S.Img src={partner2} alt="logo" />
      </S.Wrapper>
    </Section>
  );
};
