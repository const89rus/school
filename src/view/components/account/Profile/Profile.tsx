import React from 'react';

export const Profile: React.FC<any> = ({ profile }) => {
  console.log(profile);

  // Тут можешь придумать спиннер
  if (!profile) return <div>loading</div>;

  return <div>profile</div>;
};
