import React from 'react';
import ThemeInitializer from '@/app/providers/ThemeInitializer';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeInitializer>{children}</ThemeInitializer>;
};

export default Providers;
