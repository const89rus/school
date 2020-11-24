import React from 'react';

import { Curator } from 'view/common';

import Img1 from 'assets/img/Marina_Davletshina.jpg';

export const Profile: React.FC<any> = ({ profile }) => {
  console.log(profile);

  // Тут можешь придумать спиннер
  //if (!profile) return <Spinner />;

  return (
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
  );
};
