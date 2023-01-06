import { render, fireEvent } from '@tests/test-utils';

import TabLine from '@components/Tabs/TabLine';
import TabPanel from '@components/Tabs/TabPanel';

describe('Tab', () => {
  const tabs = ['tab1', 'tab2', 'tab3'];
  const panels = [1, 2, 3];
  const currentIndex = 1;
  const changeTab = jest.fn();

  it('Tab은 버튼을 렌더링하고 버튼을 클릭하면 changeTab을 호출한다.', () => {
    const { getByRole } = render(
      <TabLine index={0} currentIndex={currentIndex} changeTab={changeTab}>
        {tabs[0]}
      </TabLine>
    );

    const button = getByRole('button');
    fireEvent.click(button);
    expect(changeTab).toBeCalled();
  });

  it('Tab은 disabled가 true일 때 비활성화 된다.', () => {
    const { getByRole } = render(
      <TabLine index={0} currentIndex={currentIndex} changeTab={changeTab} disabled>
        {tabs[0]}
      </TabLine>
    );

    const button = getByRole('button');
    expect(button).toBeDisabled();
  });

  it('Panel은 index가 currentIndex와 같을 때만 렌더링된다.', () => {
    const { queryByText } = render(
      <>
        {panels.map((panel, index) => (
          <TabPanel index={index} currentIndex={currentIndex}>
            {panel}
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
