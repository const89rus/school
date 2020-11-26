import React from 'react';

import { Video } from 'view/common';

import * as S from './styled';

export const Lesson: React.FC<any> = ({ videos }) => {
  console.log(videos);

  if (!videos) return null;

  const videosMap = videos.map((item: { id: string; etag: string; snippet: { title: string } }) => (
    <S.VideoWrapper key={item.id}>
      <Video src={item.etag} headline={item.snippet.title} />
    </S.VideoWrapper>
  ));

  return <S.LessonWrapper> {videosMap} </S.LessonWrapper>;
};
