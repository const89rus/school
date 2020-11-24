import React from 'react';

import { Video } from 'view/common';

import * as S from './styled';

const cards = [
  {
    id: '1',
    headline: 'Как делать КРАСИВЫЕ ФОТОГРАФИИ на любой фотоаппарат',
    src: 'https://www.youtube.com/embed/89pc-pdR7Ps',
  },
  {
    id: '2',
    headline: 'Как делать КРАСИВЫЕ ФОТОГРАФИИ на любой фотоаппарат',
    src: 'https://www.youtube.com/embed/89pc-pdR7Ps',
  },
  {
    id: '3',
    headline: 'Как делать КРАСИВЫЕ ФОТОГРАФИИ на любой фотоаппарат',
    src: 'https://www.youtube.com/embed/89pc-pdR7Ps',
  },
  {
    id: '4',
    headline: 'Как делать КРАСИВЫЕ ФОТОГРАФИИ на любой фотоаппарат',
    src: 'https://www.youtube.com/embed/89pc-pdR7Ps',
  },
  {
    id: '5',
    headline: 'Как делать КРАСИВЫЕ ФОТОГРАФИИ на любой фотоаппарат',
    src: 'https://www.youtube.com/embed/89pc-pdR7Ps',
  },
  {
    id: '6',
    headline: 'Как делать КРАСИВЫЕ ФОТОГРАФИИ на любой фотоаппарат',
    src: 'https://www.youtube.com/embed/89pc-pdR7Ps',
  },
  {
    id: '7',
    headline: 'Как делать КРАСИВЫЕ ФОТОГРАФИИ на любой фотоаппарат',
    src: 'https://www.youtube.com/embed/89pc-pdR7Ps',
  },
  {
    id: '8',
    headline: 'Как делать КРАСИВЫЕ ФОТОГРАФИИ на любой фотоаппарат',
    src: 'https://www.youtube.com/embed/89pc-pdR7Ps',
  },
];

export const Lesson: React.FC<any> = ({ videos }) => {
  console.log(videos);

  //if (videos) return null;

  return (
    <S.LessonWrapper>
      {cards.map((item) => (
        <S.VideoWrapper key={item.id}>
          <Video src={item.src} headline={item.headline} />
        </S.VideoWrapper>
      ))}
    </S.LessonWrapper>
  );
};
