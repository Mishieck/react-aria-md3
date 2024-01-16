import React from 'react';

export type AppProviderProps = { children: React.ReactNode };

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <React.StrictMode>{children}</React.StrictMode>;
};
