import { TabPanelProps } from '@components/Tabs/interface';

import { Panel } from '@components/Tabs/Tab.style';

const TabPanel = ({ index, currentIndex, children }: TabPanelProps) =>
  index === currentIndex ? <Panel>{children}</Panel> : null;

export default TabPanel;
