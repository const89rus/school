import React from 'react';
import { AnnouncementComponent } from 'domain/admin/interfaces';

import { EditEvent, Spinner } from 'view/common';

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

export const Announcement: React.FC<AnnouncementComponent> = ({ onUpdate, onDelete, onCreate, dataList }) => {
  //if (!dataList) return <Spinner />;

  return (
    <S.Wrapper>
      <S.AnnounceWrapper>
        <EditEvent
          id="myForm"
          defaultDate=""
          defaultTime=""
          defaultHeading=""
          defaultDescription=""
          check={onCreate}
          garbage={onDelete}
        />

        <hr style={{ border: 'none', backgroundColor: '#F6AE2D', width: '100%', height: '1rem' }} />

        {events.map((item) => (
          <EditEvent
            key={item.id}
            defaultDate={item.date}
            defaultTime={item.time}
            defaultHeading={item.heading}
            defaultDescription={item.description}
            check={onUpdate}
            garbage={onDelete}
          />
        ))}
      </S.AnnounceWrapper>
    </S.Wrapper>
  );
};
