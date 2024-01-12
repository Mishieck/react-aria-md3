export type AppProviderProps = { children: React.ReactNode };

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return children;
};
