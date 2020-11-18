import { ifError } from "assert";

import React from 'react';

import * as S from './styled';

export const HomeworkItem: React.FC = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
