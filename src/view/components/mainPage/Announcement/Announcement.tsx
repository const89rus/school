import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { Event, Section, ParallaxCache } from 'view/common';

import { colors } from 'assets/variables/colors';

import * as S from './styled';

const events = [
  {
    id: '1',
    date: '24.10, вторник',
    time: '15:00',
    heading: 'Название занятия',
    description: 'Маленькое Описание занятия, если потребуется',
    y: [-20, 0],
  },
  {
    id: '2',
    date: '24.10, вторник',
    time: '15:00',
    heading: 'Название занятия',
    description: 'Маленькое Описание занятия, если потребуется',
    y: [20, 0],
  },
];

export const Announcement: React.FC = () => {
  return (
    <Section
      header="Анонс"
      id="announcement"
      variant={colors.primary}
      headerVariant={colors.darkPrimary}
      contentVariant={colors.darkPrimary}
    >
      <S.Wrapper>
        {events.map((item) => (
          <Parallax y={item.y} key={item.id}>
            <ParallaxCache />
            <Event date={item.date} time={item.time} heading={item.heading} description={item.description} />
          </Parallax>
        ))}
      </S.Wrapper>
    </Section>
  );
};
