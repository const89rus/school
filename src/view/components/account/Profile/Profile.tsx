import React from 'react';

import { Tabs } from '../Tabs/Tabs';
import { Curator } from 'view/common';

import Img1 from 'assets/img/Marina_Davletshina.jpg';

import * as S from './styled';

export const Profile: React.FC<any> = ({ profile }) => {
  console.log(profile);

  // Тут можешь придумать спиннер
  if (!profile) return <div>loading</div>;

  return (
    <div>
      <Curator
        img={Img1}
        name="Давлетшина Марина Отчество"
        age="25"
        city="г. Ноябрьск"
        mail="marinathebest@gmail.ru"
        uneversity="МГУ"
        vk="#"
        insta="#"
      />
    </div>
  );
};
