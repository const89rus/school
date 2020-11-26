import React from 'react';
import YouTube from 'react-youtube';

import { LessonsComponent } from 'domain/account/interfaces/LessonsComponent';

import { Video } from 'view/common';

import * as S from './styled';

export const Lesson: React.FC<LessonsComponent> = ({ videos }) => {
  console.log(videos);

  if (!videos) return null;

  const videosMap = videos.map((item) => (
    <S.VideoWrapper key={item.etag}>
      {/* <Video src={item.snippet.thumbnails.default.url} headline={item.snippet.title} /> */}
      <YouTube videoId={item.id.videoId} />
    </S.VideoWrapper>
  ));

  return <S.LessonWrapper> {videosMap} </S.LessonWrapper>;
};