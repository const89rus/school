import React from 'react';

import { Card } from 'view/common';

import Img1 from 'assets/img/Marina_Davletshina.jpg';
import Img2 from 'assets/img/Regina_ayupova.jpg';
import Img3 from 'assets/img/Oksana_Kolesnikova.jpg';

import * as S from './styled';

// потом это будет запрашиваться с бэка в Админке
const cards = [
  {
    id: '1',
    name: 'Марина Давлетшина',
    position: 'руководитель проекта',
    img: Img1,
  },
  {
    id: '2',
    name: 'Регина Аюпова ',
    position: 'помощник руководителя проекта',
    img: Img2,
  },
  {
    id: '3',
    name: 'Оксана Колесникова',
    position: 'куратор проекта',
    img: Img3,
  },
];

export const Team: React.FC = () => {
  return (
    <S.Wrapper id="team">
      Команда
      <div>
        {cards.map((item, i) => (
          <Card
            key={item.id}
            position={item.position}
            name={item.name}
            img={item.img}
            variant={i % 2 == 0 ? 'yellow' : 'primaryDark'}
          />
        ))}
      </div>
    </S.Wrapper>
  );
};
