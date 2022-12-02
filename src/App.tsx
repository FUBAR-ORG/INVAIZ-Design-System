import { useState } from 'react';

import Tabs, { TabPanel } from '@components/Tabs/Tabs';

const tabs = ['전체보기', '다이얼', '버튼'];

const App = () => {
  const [index, setIndex] = useState(0);

  const changeTab = (idx: number) => setIndex(idx);

  return (
    <>
      <Tabs tabs={tabs} changeTab={changeTab} />

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
