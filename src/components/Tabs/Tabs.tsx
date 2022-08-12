import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import Tab from './Tab';
import Underline from './Underline';

export interface Props {
  tabs: string[];
}

/**
 사용자가 커스텀 할 수 없는 제작자가 제공하는 콘텐츠일 경우 사용하는 탭 메뉴 입니다.
 하단바의 막대가 좌우로 움직이며 인터랙션합니다.
 */
export default function Tabs({ tabs }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [underlinePos, setUnderlinePos] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  const tabsRef = useRef<HTMLButtonElement[] | null[]>([]);

  useEffect(() => {
    const setTabUnderline = () => {
      const currentTab = tabsRef.current[activeIndex];
      setUnderlinePos(currentTab?.offsetLeft ?? 0);
      setUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabUnderline();

    window.addEventListener('resize', setTabUnderline);

    return () => window.removeEventListener('resize', setTabUnderline);
  }, [activeIndex]);

  return (
    <Wrapper>
      {tabs.map((tab, i) => (
        <Tab
          type='button'
          key={tab}
          ref={(el: HTMLButtonElement | null) => {
            tabsRef.current[i] = el;
          }}
          onClick={() => setActiveIndex(i)}
        >
          {tab}
        </Tab>
      ))}
      <Underline underlinePos={underlinePos} underlineWidth={underlineWidth} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;
