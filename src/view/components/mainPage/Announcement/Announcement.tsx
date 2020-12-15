import React from 'react';

import { Event, Section } from 'view/common';

import { colors } from 'assets/variables/colors';

import * as S from './styled';

const events = [
  {
    id: '1',
    date: '21.11, Суббота',
    time: '11:00',
    heading: 'Лекция "каким источникам информации сегодня можно доверять"',
    description: 'Спикер Олег Дмитриев',
  },
  {
    id: '2',
    date: '22.11, Воскресенье',
    time: '11:00',
    heading: 'Семинар "каким источником информации сегодня можно доверять"',
    description: 'Спикер Олег Дмитриев',
  },
  {
    id: '31',
    date: '28.11, Суббота',
    time: '13:00',
    heading: '"Жанры в печатных СМИ',
    description: 'Спикер Ольга Сытник',
  },
  {
    id: '4',
    date: '29.11, Воскресенье',
    time: '15:00',
    heading: '"Телевизионные жанры"',
    description: 'Спикер Ольга Петрова',
  },
  {
    id: '5',
    date: '05.12, Суббота',
    time: '12:00',
    heading: '"Советский киноавангард в лице Сергея Эйзенштейна"',
    description: '',
  },
  {
    id: '6',
    date: '05.12, Суббота',
    time: '13:00',
    heading: '"Как создать высококачественный продукт на ТВ"',
    description: 'Спикер Оксана Колесникова',
  },
  {
    id: '7',
    date: '12.12, Суббота',
    time: '13:00',
    heading: '"Процесс работы в современных печатных изданиях"',
    description: 'Спикер Регина Аюпова',
  },
  {
    id: '8',
    date: '13.12, Воскресенье',
    time: '12:00',
    heading: '"Основы интервью на иностранном языке"',
    description: 'Спикер Олеся Григорьева',
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
