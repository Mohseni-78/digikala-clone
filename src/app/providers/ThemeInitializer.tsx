'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/shared/store/theme-store';

export default function ThemeInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const setTheme = useThemeStore(state => state.setTheme);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (stored) {
      setTheme(stored);
    }
  }, []);

  return <>{children}</>;
}
