import React from 'react';

import * as S from './styled';

interface Props {
  name: string;
  img: string;
  position: string;
  alt?: string;
  // Если придет вариант primaryDark то это цвет 075F6B на макете
  // Если придет вариант yellow то это цвет F6AE2D на макете
  variant?: 'primaryDark' | 'yellow';
}

export const Card: React.FC<Props> = ({ name, img, alt = 'avatar', position, variant = 'primaryDark' }) => {
  return (
    <S.CardWrapper variant={variant}>
      <img src={img} alt={alt} />

      <span>{name}</span>
      <span>{position}</span>
    </S.CardWrapper>
  );
};
