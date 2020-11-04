import React, { useState, useCallback } from 'react';

import { TabContext } from './TabContext';

interface Props {
  initialValue: string;
  onChangeActiveTab?: (tab: string) => void;
}

export const Tab: React.FC<Props> = ({ initialValue, children, onChangeActiveTab }) => {
  const [activeTab, setActiveTab] = useState(initialValue);

  const onChangeTab = useCallback(
    (newTab: string) => {
      setActiveTab(newTab);
      if (onChangeActiveTab) onChangeActiveTab(newTab);
    },
    [setActiveTab, onChangeActiveTab]
  );

  return <TabContext.Provider value={{ activeTab, onChangeTab }}>{children}</TabContext.Provider>;
};
