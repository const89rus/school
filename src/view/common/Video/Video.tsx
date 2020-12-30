import React from 'react';

import * as S from './styled';

interface Props {
  src?: string;
  headline?: string;
  videos?: string;
}

export const Video: React.FC<Props> = ({ src, headline }) => {
  return (
    <S.Wrapper>
      <S.Iframe>
        <iframe
          width="100%"
          height="100%"
          src={src}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        ></iframe>
      </S.Iframe>
      <S.HeadlineVideo>{headline}</S.HeadlineVideo>
    </S.Wrapper>
  );
};
