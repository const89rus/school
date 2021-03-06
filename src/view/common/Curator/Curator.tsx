import React from 'react';

import { fb } from 'data/firebase/firebase';

import { ReactComponent as Vk } from 'assets/svg/vk.svg';

import * as S from './styled';

interface Props {
  name: string;
  age: string;
  img: string;
  city: string;
  mail: string;
  uneversity: string;
  vk: string;
  alt?: string;
}

export const Curator: React.FC<Props> = ({ name, img, alt = 'avatar', age, city, mail, uneversity, vk }) => {
  return (
    <S.CuratorWrapper>
      <S.CuratorAvatar>
        <S.Img src={img} alt={alt} />
      </S.CuratorAvatar>
      <S.CuratorContent>
        <S.Name>
          {name}, {age}
        </S.Name>
        <S.Info>
          <span>{city}</span>
          <span>{mail}</span>
          <span>{uneversity}</span>
          <S.Social>
            <S.Link href={vk}>
              <S.SocialContainer>
                <Vk />
              </S.SocialContainer>
            </S.Link>
          </S.Social>
        </S.Info>
      </S.CuratorContent>
      <S.BottomInfo>
        <S.Link href="/edit">редактировать профиль</S.Link>
        <S.Link href="/" onClick={() => fb.auth().signOut()}>
          выйти
        </S.Link>
      </S.BottomInfo>
    </S.CuratorWrapper>
  );
};
