import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ICardsComponent, CardsFields } from 'domain/admin/interfaces';

import { ReactComponent as Garbage } from 'assets/svg/garbage.svg';
import { ReactComponent as Check } from 'assets/svg/check.svg';

//import { EditCard } from 'view/common';

import * as S from './styled';

/*const items = [
  {
    id: '1',
    img: '',
    name: '1',
    position: '1',
  },
  {
    id: '2',
    img: '',
    name: '1',
    position: '1',
  },
  {
    id: '3',
    img: '',
    name: '',
    position: '',
  },
];*/

export const Teachers: React.FC<ICardsComponent> = ({ onUpdate, list }) => {
  const { handleSubmit, errors } = useForm<CardsFields>({
    mode: 'onBlur',
    defaultValues: {
      img: list.img,
      name: list.name,
      position: list.position,
    },
  });

  const press = useEffect(() => {
    <S.EditCardWrapper>
      <S.Input type="file" name="img"></S.Input>
      <S.Input type="text" placeholder="ФИО" name="name"></S.Input>
      <S.Input type="text" placeholder="Описание" name="position"></S.Input>
      <Check />
      <Garbage onClick={handleSubmit(onUpdate)} />
    </S.EditCardWrapper>;
  });
  return (
    <S.Wrapper id="teachers">
      <S.Add>Добавить</S.Add>
      {press}
    </S.Wrapper>
  );
};
