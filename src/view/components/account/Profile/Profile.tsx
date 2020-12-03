import React from 'react';

import { Curator, Spinner } from 'view/common';

import Img1 from 'assets/img/Marina_Davletshina.jpg';

export const Profile: React.FC<any> = ({ profile }) => {
  console.log(profile);

  // Тут можешь придумать спиннер
  if (!profile) return <Spinner />;

  return (
    <Curator
      img={Img1}
      name={profile.name}
      age={profile.age}
      city={profile.city}
      mail={profile.email}
      uneversity={profile.study}
      vk={profile.social}
      insta={profile.social}
    />
  );
};
