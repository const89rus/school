import React from 'react';

import { Event } from 'view/common';
import { Section } from 'view/common';

import { colors } from 'assets/variables/colors';

import * as S from './styled';

const events = [
  {
    id: '1',
    date: '24.10, вторник',
    time: '15:00',
    heading: 'Название занятия',
    description: 'Маленькое Описание занятия, если потребуется',
  },
  {
    id: '2',
    date: '24.10, вторник',
    time: '15:00',
    heading: 'Название занятия',
    description: 'Маленькое Описание занятия, если потребуется',
  },
];

export const Announcement: React.FC = () => {
  return (
    <Section
      header="Анонс"
      variant={colors.primary}
      headerVariant={colors.darkPrimary}
      contentVariant={colors.darkPrimary}
    >
      <S.Wrapper id="announcement">
        {events.map((item) => (
          <Event
            key={item.id}
            date={item.date}
            time={item.time}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </S.Wrapper>
    </Section>
  );
};
