import { useState } from 'react';

import TabLine from '@components/Tabs/TabLine';
import TabContain from '@components/Tabs/TabContain';
import TabVertical from '@components/Tabs/TabVertical';
import TabPanel from '@components/Tabs/TabPanel';

const tabs = ['전체보기', '다이얼', '버튼'];

const App = () => {
  const [index, setIndex] = useState(0);

  const changeTab = (idx: number) => setIndex(idx);

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        {tabs.map((tab, idx) => (
          <TabLine key={tab} index={idx} currentIndex={index} changeTab={changeTab}>
            {tab}
          </TabLine>
        ))}
      </div>
      <div style={{ marginBottom: 20 }}>
        {tabs.map((tab, idx) => (
          <TabContain key={tab} index={idx} currentIndex={index} changeTab={changeTab}>
            {tab}
          </TabContain>
        ))}
      </div>
      <div style={{ marginBottom: 20 }}>
        {tabs.map((tab, idx) => (
          <TabVertical key={tab} index={idx} currentIndex={index} changeTab={changeTab}>
            {tab}
          </TabVertical>
        ))}
      </div>

      <TabPanel index={0} currentIndex={index}>
        0
      </TabPanel>
      <TabPanel index={1} currentIndex={index}>
        1
      </TabPanel>
      <TabPanel index={2} currentIndex={index}>
        2
      </TabPanel>
    </>
  );
};

export default App;
