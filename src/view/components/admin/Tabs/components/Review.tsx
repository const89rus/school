import React from 'react';

import { IReviewsComponent, ReviewsFields } from 'domain/admin/interfaces';

import { ReactComponent as Doc } from 'assets/svg/Doc.svg';
import { ReactComponent as Pdf } from 'assets/svg/Pdf.svg';

import * as S from './styled';
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: '1',
    content: <Doc />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '2',
    content: <Pdf />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '3',
    content: <Doc />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '4',
    content: <Pdf />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '5',
    content: <Doc />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '6',
    content: <Pdf />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '7',
    content: <Doc />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '8',
    content: <Pdf />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '9',
    content: <Doc />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '10',
    content: <Pdf />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '11',
    content: <Doc />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '12',
    content: <Pdf />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '13',
    content: <Doc />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
  {
    id: '14',
    content: <Pdf />,
    lesson: 'Lesson 1',
    student: 'Igor Andreev',
    link: '/',
  },
];

export const Review: React.FC<IReviewsComponent> = () => {
  return (
    <S.Wrapper id="review">
      <S.Review>
        {reviews.map((item) => (
          <S.ReviewItem key={item.id}>
            <Link to={item.link}>{item.content}</Link>
            <S.Lesson>{item.lesson}</S.Lesson>
            <S.Student>{item.student}</S.Student>
          </S.ReviewItem>
        ))}
      </S.Review>
    </S.Wrapper>
  );
};
