import React, { useContext } from 'react';

import { TabContext } from './TabContext';

interface Props {
  value: string;
  className?: string;
}

export const TabHeader: React.FC<Props> = ({ children, value, className }) => {
  const { onChangeTab } = useContext(TabContext);

  return (
    <div className={className} onClick={() => onChangeTab(value)}>
      {children}
    </div>
  );
};
