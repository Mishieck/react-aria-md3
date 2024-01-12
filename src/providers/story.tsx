import React from 'react';
import { AppProvider } from './app';

const StoryProvider = (Story: React.FC<{}>) => (
  <AppProvider>
    <Story />
  </AppProvider>
);

export default StoryProvider;
