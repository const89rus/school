import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as S from './styled';

interface Props {
  header: string;
  variant?: string;
  headerVariant?: string;
  contentVariant?: string;
  id?: string;
}

export const Section: React.FC<Props> = ({ variant, headerVariant, contentVariant, header, children, id }) => {
  return (
    <S.SectionWrapper variant={variant} id={id}>
      <S.SectionHeader headerVariant={headerVariant}>{header}</S.SectionHeader>
      <S.SectionContent contentVariant={contentVariant}>
        <Parallax y={[-5, 5]}>{children}</Parallax>
      </S.SectionContent>
    </S.SectionWrapper>
  );
};
