import React from 'react';

import { Curator, Spinner } from 'view/common';

import Avatar from 'assets/img/avatar.png';

export const Profile: React.FC<any> = ({ profile }) => {
  console.log(profile);

  // Тут можешь придумать спиннер
  if (!profile) return <Spinner />;

  return (
    <Curator
      img={Avatar}
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
