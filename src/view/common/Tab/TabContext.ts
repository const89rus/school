import React from 'react';

interface Context {
  activeTab: string;
  onChangeTab: (value: string) => void;
}

export const TabContext = React.createContext<Context>({
  activeTab: '',
  onChangeTab: () => undefined,
});
