import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ReactComponent as Garbage } from 'assets/svg/garbage.svg';
import { ReactComponent as Check } from 'assets/svg/check.svg';

import { IAnnouncementComponent, AnnouncementFields } from 'domain/admin/interfaces';

//import { EditEvent } from 'view/common';

import * as S from './styled';

/* const events = [
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
  {
    id: '9',
    date: 'url.date',
    time: 'url.time',
    heading: 'url.heading',
    description: 'url.description',
  },
]; */

/* 
  API URL api/v1/announcements

*/

export const Announcement: React.FC<IAnnouncementComponent> = ({ onUpdate, list }) => {
  const { handleSubmit } = useForm<AnnouncementFields>({
    mode: 'onBlur',
    defaultValues: {
      date: list.date,
      time: list.time,
      heading: list.heading,
      description: list.description,
    },
  });

  const event = useEffect(() => {
    <S.EventWrapper>
      <S.Date placeholder="Дата" name="date" />
      <S.Time placeholder="Время" name="time" />
      <S.Event>
        <S.Heading placeholder="Название" name="heading" />
        <S.Description placeholder="Описание (если потребуется)" name="description" />
      </S.Event>
      <Check />
      <Garbage onClick={handleSubmit(onUpdate)} />
    </S.EventWrapper>;
  });
  return (
    <S.Wrapper>
      <S.Add>Добавить</S.Add>
      <S.AnnounceWrapper> {event} </S.AnnounceWrapper>
    </S.Wrapper>
  );
};
