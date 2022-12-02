import { render, fireEvent } from '@tests/test-utils';

import Tabs, { TabPanel } from '@components/Tabs/Tabs';

describe('Tab', () => {
  const tabs = ['tab1', 'tab2', 'tab3'];
  const panels = [1, 2, 3];
  const changeTab = jest.fn();

  it('tabs의 값을 갖는 버튼이 tabs의 길이만큼 있고, 각 버튼의 클릭은 tabChange를 호출한다.', () => {
    const tabsLength = tabs.length;
    const { getAllByRole } = render(<Tabs tabs={tabs} changeTab={changeTab} />);

    const buttons = getAllByRole('button');
    expect(buttons.length).toEqual(tabsLength);

    buttons.forEach((button, index) => {
      expect(button).toContainHTML(tabs[index]);
      fireEvent.click(button);
    });

    expect(changeTab).toBeCalledTimes(tabsLength);
  });

  it('currentIndex와 같은 index의 panel만 렌더링된다.', () => {
    const currentIndex = 1;

    const { queryByText } = render(
      <>
        <Tabs tabs={tabs} changeTab={changeTab} />
        {tabs.map((tab, index) => (
          <TabPanel index={index} currentIndex={currentIndex}>
            {panels[index]}
          </TabPanel>
        ))}
      </>
    );

    const results = panels.map((panel) => queryByText(panel));

    results.forEach((result, index) => {
      if (index !== currentIndex) {
        expect(result).toBeNull();
      } else {
        expect(result).toBeInTheDocument();
      }
    });
  });
});
