import React from 'react';

import { Event, Section } from 'view/common';

import { colors } from 'assets/variables/colors';

import * as S from './styled';

const events = [
  {
    id: '1',
    date: '06.02, Суббота',
    time: '12:00',
    heading: 'Лекция "Что нужно знать о международных СМИ и как эффективно ими пользоваться"',
    description: 'Спикер Олег Дмитриев',
  },
  {
    id: '2',
    date: '07.02, Воскресенье',
    time: '12:00',
    heading: 'Лекция-семинар "Что важнее: выстроить текст композиционно или написать его?"',
    description: 'Спикер Ольга Сытник',
  },
  {
    id: '3',
    date: '20.02, Суббота',
    time: '12:00',
    heading: 'Семинар "Все по взрослому: учимся писать рецензии, как настоящие кинокритики',
    description: 'Спикер Марина Давлетшина',
  },
  {
    id: '4',
    date: '21.02, Воскресенье',
    time: '11:00',
    heading: 'Лекция "Шалости русского языка"',
    description: 'Спикер Ольга Межина',
  },
  {
    id: '5',
    date: '28.02, Воскресенье',
    time: '11:00',
    heading: 'Лекция "Крутите барабан. Феномен успеха программ с многолетней историей"',
    description: 'Спикер Азамат Каримов',
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
