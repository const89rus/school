import React from 'react';

import { Card } from 'view/common';

import Img1 from 'assets/img/alexandr_jdanov.jpg';
import Img2 from 'assets/img/ekaterina_nihaylova.jpg';

import * as S from './styled';

const cards = [
  {
    id: '1',
    name: 'Александр Жданов',
    position: 'видеограф, режиссер монтажа',
    img: Img1,
  },
  {
    id: '2',
    name: 'Екатерина Михайлова',
    position: 'маркетолог',
    img: Img2,
  },
];

export const Media: React.FC = () => {
  return (
    <S.Wrapper id="media">
      {cards.map((item, i) => (
        <Card
          key={item.id}
          position={item.position}
          name={item.name}
          img={item.img}
          variant={i % 2 == 0 ? 'yellow' : 'primaryDark'}
        />
      ))}
    </S.Wrapper>
  );
};
