import React, { Fragment, useContext } from 'react';

import { TabContext } from './TabContext';

interface Props {
  value: string;
}

export const TabContent: React.FC<Props> = ({ children, value }) => {
  const { activeTab } = useContext(TabContext);

  if (activeTab !== value) return null;

  return <Fragment>{children}</Fragment>;
};
