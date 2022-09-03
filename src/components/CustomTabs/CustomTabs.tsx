import styled from '@emotion/styled';
import { createContext, ReactNode } from 'react';
import CustomTab from './CustomTab';

export const CustomTabsContext = createContext<string>('');

export interface Props {
  children: ReactNode;
  value: string;
  onChange(newValue: string): void;
}

/**
사용자가 커스텀할 수 있는 콘텐츠일 경우 사용하는 탭 메뉴입니다. 
선택된 콘텐츠는 강조되고, 선택되지 않은 콘텐츠는 연하게 처리됩니다.
 */
function CustomTabs({ children, value, onChange }: Props) {
  const onTabClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }

    if (!e.target.dataset.index) {
      return;
    }

    onChange(e.target.dataset.index);
  };

  return (
    <CustomTabsContext.Provider value={value}>
      <Wrapper onClick={onTabClick}>{children}</Wrapper>;
    </CustomTabsContext.Provider>
  );
}

export default Object.assign(CustomTabs, {
  Tab: CustomTab,
});

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
