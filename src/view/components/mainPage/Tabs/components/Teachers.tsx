import React from 'react';

import { Card } from 'view/common';

import Img1 from 'assets/img/oleg_dmitriev.jpg';
import Img2 from 'assets/img/olga_sytnik.jpg';
import Img3 from 'assets/img/olga_mejina.jpg';
import Img4 from 'assets/img/olesya_grigoreva.jpg';
import Img5 from 'assets/img/azamat_karimov.jpg';
import Img6 from 'assets/img/julia_tihonova.jpg';
import Img7 from 'assets/img/olga_petrova.jpg';

import * as S from './styled';

const cards = [
  {
    id: '1',
    name: 'Олег Дмитриев',
    position: 'Советник МИА «Россия сегодня», профессор НИУ ВШЭ',
    img: Img1,
  },
  {
    id: '2',
    name: 'Ольга Сытник',
    position:
      'Член Союза журналистов России, председатель Союза журналистов города Салехард, автор проекта «Школа молодого журналиста» (г. Салехард)',
    img: Img2,
  },
  {
    id: '3',
    name: 'Ольга Межина',
    position:
      'Кандидат педагогических наук, главный научный сотрудник ГКУ ЯНАО «Научный центр изучения Арктики», автор более 15 социальных молодёжных проектов. Является сертифицированным преподавателем по йоге',
    img: Img3,
  },
  {
    id: '4',
    name: 'Олеся Григорьева',
    position: 'Преподаватель иностранных языков, разработчик методики Soul English',
    img: Img4,
  },
  {
    id: '5',
    name: 'Азамат Каримов',
    position: 'Профессиональный оратор, ведущий мероприятий, автор курса «Публичные выступления» (г. Ноябрьск)',
    img: Img5,
  },
  {
    id: '6',
    name: 'Юлия Тихонова',
    position: 'Телеведущая, блогер, журналист «Сургут 24»',
    img: Img6,
  },
  {
    id: '7',
    name: 'Ольга Петрова',
    position: 'Журналист, телеведущая, редактор «Вести. Севастополь»',
    img: Img7,
  },
];

export const Teachers: React.FC = () => {
  return (
    <S.Wrapper id="teachers">
      {cards.map((item, i) => (
        <Card
          key={item.id}
          position={item.position}
          name={item.name}
          img={item.img}
          variant={i % 2 == 0 ? 'primaryDark' : 'yellow'}
        />
      ))}
    </S.Wrapper>
  );
};
