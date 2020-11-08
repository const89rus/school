import React from 'react';

import * as S from './styled';

export const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <div>© 2020 Онлайн - курс «Это только начало»</div>
      <S.ContactWrapper>
        <S.Question>Хотите связаться с нами?</S.Question>
        <S.Link href="tel:+79224630297">Телефон: +7(922)463-02-97</S.Link>
        <S.Link href="mailto:srartnow89@yandex.ru">Email: srartnow89@yandex.ru</S.Link>
      </S.ContactWrapper>
    </S.Wrapper>
  );
};
