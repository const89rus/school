import React from 'react';

import * as S from './styled';

interface Props {
  header: string;
  variant?: string;
  headerVariant?: string;
  contentVariant?: string;
}

export const Section: React.FC<Props> = ({ variant, headerVariant, contentVariant, header, children }) => {
  return (
    <S.SectionWrapper variant={variant}>
      <S.SectionHeader headerVariant={headerVariant}>{header}</S.SectionHeader>
      <S.SectionContent contentVariant={contentVariant}>{children}</S.SectionContent>
    </S.SectionWrapper>
  );
};
