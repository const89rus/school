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
      <S.CardAvatar variant={variant}>
        <S.Img src={img} alt={alt} />
      </S.CardAvatar>
      <S.CardContent variant={variant}>
        <S.Name>{name}</S.Name>
        <S.Position>{position}</S.Position>
      </S.CardContent>
    </S.CardWrapper>
  );
};
