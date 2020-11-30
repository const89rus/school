import React from 'react';

import { HomeworkItem } from 'view/common';

//import { ReactComponent as Document } from 'assets/svg/document.svg';
import { ReactComponent as Doc } from 'assets/svg/Doc.svg';
import { ReactComponent as Pdf } from 'assets/svg/Pdf.svg';

import * as S from './styled';

const homeworks = [
  {
    id: '1',
    content: <Doc />,
  },
  {
    id: '2',
    content: <Pdf />,
  },
  {
    id: '3',
    content: <Doc />,
  },
  {
    id: '4',
    content: <Pdf />,
  },
  {
    id: '5',
    content: <Doc />,
  },
  {
    id: '6',
    content: <Pdf />,
  },
  {
    id: '7',
    content: <Doc />,
  },
  {
    id: '8',
    content: <Pdf />,
  },
  {
    id: '9',
    content: <Doc />,
  },
  {
    id: '10',
    content: <Pdf />,
  },
  {
    id: '1',
    content: <Doc />,
  },
  {
    id: '12',
    content: <Pdf />,
  },
  {
    id: '13',
    content: <Doc />,
  },
  {
    id: '14',
    content: <Pdf />,
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
