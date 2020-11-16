import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Vk } from 'assets/svg/vk.svg';
import { ReactComponent as Insta } from 'assets/svg/insta.svg';

import * as S from './styled';

interface Props {
  name: string;
  age: string;
  img: string;
  city: string;
  mail: string;
  uneversity: string;
  insta: string;
  vk: string;
  alt?: string;
}

export const Curator: React.FC<Props> = ({ name, img, alt = 'avatar', age, city, mail, uneversity, insta, vk }) => {
  return (
    <S.CuratorWrapper>
      <S.CuratorAvatar>
        <S.Img src={img} alt={alt} />
      </S.CuratorAvatar>
      <S.CuratorContent>
        <S.Name>{name}, {age}</S.Name>
        <S.Info>
            <span>{city}</span>
            <span>{mail}</span>
            <span>{uneversity}</span>
            <S.Social>
                <Link to={insta}>
                  <S.SocialContainer>
                    <Insta />
                  </S.SocialContainer>
                </Link>                
                <Link to={vk}>
                <S.SocialContainer>
                    <Vk />
                  </S.SocialContainer>
                </Link>
            </S.Social>
        </S.Info>
      </S.CuratorContent>
      <S.Edit href="/">
        редактировать профиль
      </S.Edit>
    </S.CuratorWrapper>
  );
};