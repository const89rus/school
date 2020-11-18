import React from 'react';

import { ReactComponent as Icon } from 'assets/svg/input_icon.svg';
import { ReactComponent as Smile } from 'assets/svg/smile.svg';

import * as S from './styled';

interface Props {
  label: string;
}

export const Upload: React.FC<Props> = ({ label }) => {
  return (
    <S.Wrapper>
      <S.Label>
        <S.IconWrapper>
          <Icon />
        </S.IconWrapper>
        <S.FakeField />
        {label}
        <S.SmileWrapper>
          <Smile />
        </S.SmileWrapper>
        <S.Input type="file" name="file" id="file" multiple />
      </S.Label>
    </S.Wrapper>
  );
};
