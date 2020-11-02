import React, { Fragment } from 'react';

import { Button } from 'view/common';

import * as S from './styled';

export const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <S.Layout>
        <Button>12</Button>
      </S.Layout>
      {children}
    </Fragment>
  );
};
