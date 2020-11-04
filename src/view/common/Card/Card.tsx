import React from 'react';

import * as S from './styled';

interface Props {
  name: string;
  img: string;
  position: string;
  alt?: string;
}

export const Card: React.FC<Props> = ({ name, img, alt = 'avatar', position }) => {
  return (
    <S.CardWrapper>
      <img src={img} alt={alt} />

      <span>{name}</span>
      <span>{position}</span>
    </S.CardWrapper>
  );
};
