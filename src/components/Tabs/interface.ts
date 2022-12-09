import { type ReactNode } from 'react';

export interface TabProps {
  index: number;
  currentIndex: number;
  disabled?: boolean;
  changeTab: (index: number) => void;
  children: ReactNode;
}

export interface TabPanelProps {
  index: number;
  currentIndex: number;
  children: ReactNode;
}
