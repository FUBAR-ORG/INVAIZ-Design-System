import styled from '@emotion/styled';
import { createContext, ReactNode } from 'react';
import CustomTab from './CustomTab';

export const CustomTabsContext = createContext<number>(0);

export interface Props {
  children: ReactNode;
  /** index는 0번부터 시작합니다. */
  activeIndex: number;
  onChange(newValue: number): void;
}

/**
사용자가 커스텀할 수 있는 콘텐츠일 경우 사용하는 탭 메뉴입니다. 
선택된 콘텐츠는 강조되고, 선택되지 않은 콘텐츠는 연하게 처리됩니다.
 */
function CustomTabs({ children, activeIndex, onChange }: Props) {
  const onTabClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }

    if (!e.target.dataset.index) {
      return;
    }

    onChange(Number(e.target.dataset.index));
  };

  return (
    <CustomTabsContext.Provider value={activeIndex}>
      <Wrapper onClick={onTabClick}>{children}</Wrapper>
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
