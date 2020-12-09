import React from 'react';
import YouTube from 'react-youtube';

import { LessonsComponent } from 'domain/account/interfaces/LessonsComponent';

import * as S from './styled';

export const Lesson: React.FC<LessonsComponent> = ({ videos }) => {
  if (!videos) return null;

  const videosMap = videos.map((item) => (
    <S.VideoWrapper key={item.etag}>
      <S.VideoBorder>
        <YouTube videoId={item.id.videoId} />
      </S.VideoBorder>
      <S.YouTubeTitle>{item.snippet.title}</S.YouTubeTitle>
    </S.VideoWrapper>
  ));

  return <S.LessonWrapper> {videosMap} </S.LessonWrapper>;
};
