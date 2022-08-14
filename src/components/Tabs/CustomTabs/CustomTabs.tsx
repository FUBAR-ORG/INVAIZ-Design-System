import styled from '@emotion/styled';
import CustomTab from './CustomTab';
import { Props as TabsProps } from '../Tabs';

/**
사용자가 커스텀할 수 있는 콘텐츠일 경우 사용하는 탭 메뉴입니다. 
선택된 콘텐츠는 강조되고, 선택되지 않은 콘텐츠는 연하게 처리됩니다.
 */
export default function CustomTabs({ selectedIndex, tabs, onClick }: TabsProps) {
  return (
    <Wrapper>
      {tabs.map((tab, i) => (
        <CustomTab type='button' active={i === selectedIndex} onClick={() => onClick(i)} key={tab}>
          {tab}
        </CustomTab>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
