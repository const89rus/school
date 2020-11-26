import React from 'react';

import { HomeworkItem } from 'view/common';

import * as S from './styled';

const homeworks = [
  {
    id: '1',
    content: '',
  },
  {
    id: '2',
    content: '',
  },
  {
    id: '3',
    content: '',
  },
  {
    id: '4',
    content: '',
  },
  {
    id: '5',
    content: '',
  },
  {
    id: '6',
    content: '',
  },
  {
    id: '7',
    content: '',
  },
  {
    id: '8',
    content: '',
  },
  {
    id: '9',
    content: '',
  },
  {
    id: '10',
    content: '',
  },
  {
    id: '1',
    content: '',
  },
  {
    id: '12',
    content: '',
  },
  {
    id: '13',
    content: '',
  },
  {
    id: '14',
    content: '',
  },
];

export const Homework: React.FC = () => {
  return (
    <S.HomeworkWrapper>
      <S.HomerworkItemsWrapper>
        {homeworks.map((item) => (
          <HomeworkItem key={item.id}> {item.content} </HomeworkItem>
        ))}
      </S.HomerworkItemsWrapper>
    </S.HomeworkWrapper>
  );
};
