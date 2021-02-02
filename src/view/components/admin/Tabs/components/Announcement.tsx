import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ReactComponent as Garbage } from 'assets/svg/garbage.svg';
import { ReactComponent as Check } from 'assets/svg/check.svg';

import { AnnouncementComponent, AnnouncementFields } from 'domain/admin/interfaces';

//import { EditEvent } from 'view/common';

import * as S from './styled';

export const Announcement: React.FC<AnnouncementComponent> = ({ onUpdate, dataList }) => {
  // const { handleSubmit } = useForm<AnnouncementFields>({
  //   mode: 'onBlur',
  //   defaultValues: {
  //     date: list.date,
  //     time: list.time,
  //     heading: list.heading,
  //     description: list.description,
  //   },
  // });

  const onUpdateItem = (): void => {
    console.log(1);
  };

  return (
    <S.Wrapper>
      <S.Add>Добавить</S.Add>
      <S.AnnounceWrapper>
        <S.EventWrapper>
          <S.Date placeholder="Дата" name="date" />
          <S.Time placeholder="Время" name="time" />
          <S.Event>
            <S.Heading placeholder="Название" name="heading" />
            <S.Description placeholder="Описание (если потребуется)" name="description" />
          </S.Event>
          <Check />
          <Garbage onClick={onUpdateItem} />
        </S.EventWrapper>
      </S.AnnounceWrapper>
    </S.Wrapper>
  );
};
