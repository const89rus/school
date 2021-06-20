import React from 'react';

import { Event, Section } from 'view/common';

import { colors } from 'assets/variables/colors';

import * as S from './styled';

const events = [
  {
    id: '1',
    date: '30.04 пятница',
    time: '20:00',
    heading: 'Нетворкинг-сессия с журналистами из разных уголков страны и участниками курса',
    description: 'Спикер Марина Давлетшина',
  },
  {
    id: '2',
    date: '25.04 воскресенье',
    time: '12:00',
    heading: '"Секреты успеха на экзамене и собеседовании"',
    description: 'Спикер Ольга Межина',
  },
  {
    id: '3',
    date: '24.04 суббота',
    time: '12:00',
    heading: '“Пробуждение природного голоса для привлечения внимания вашей аудитории”',
    description: 'Спикер Олеся Григорьева',
  },
  {
    id: '4',
    date: '17.04 суббота',
    time: '12:00',
    heading: '"2.0. Как рассказать интересную историю"',
    description: 'Спикер Оксана Колесникова',
  },
  {
    id: '5',
    date: '11.04 воскресенье',
    time: '12:00',
    heading: '«Составляющие хорошего издания: верстка, дизайн, контент»',
    description: 'Спикер Регина Аюпова',
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
