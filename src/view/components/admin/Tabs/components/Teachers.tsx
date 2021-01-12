import React from 'react';

import { EditCard } from 'view/common';

import * as S from './styled';

const items = [
  {
    id: '1',
    img: '',
    name: 'Name',
    position: 'Description',
  },
  {
    id: '2',
    img: '',
    name: 'Name',
    position: 'Description',
  },
  {
    id: '3',
    img: '',
    name: '',
    position: '',
  },
];

export const Teachers: React.FC = () => {
  return (
    <S.Wrapper id="teachers">
      <S.Add>Добавить</S.Add>
      {items.map((item) => (
        <EditCard key={item.id} img={item.img} name={item.name} position={item.position} />
      ))}
    </S.Wrapper>
  );
};
