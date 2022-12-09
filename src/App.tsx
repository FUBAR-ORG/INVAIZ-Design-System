import { useState } from 'react';

import Tab, { TabPanel } from '@components/Tabs/Tab';

const tabs = ['전체보기', '다이얼', '버튼'];

const App = () => {
  const [index, setIndex] = useState(0);

  const changeTab = (idx: number) => setIndex(idx);

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        {tabs.map((tab, idx) => (
          <Tab key={tab} index={idx} currentIndex={index} changeTab={changeTab}>
            {tab}
          </Tab>
        ))}
      </div>
      <div style={{ marginBottom: 20 }}>
        {tabs.map((tab, idx) => (
          <Tab key={tab} shape='contain' index={idx} currentIndex={index} changeTab={changeTab}>
            {tab}
          </Tab>
        ))}
      </div>
      <div style={{ marginBottom: 20 }}>
        {tabs.map((tab, idx) => (
          <Tab key={tab} shape='vertical' index={idx} currentIndex={index} changeTab={changeTab}>
            {tab}
          </Tab>
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
