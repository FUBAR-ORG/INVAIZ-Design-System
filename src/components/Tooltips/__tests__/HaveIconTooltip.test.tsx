import { render, fireEvent, act, waitFor, waitForElementToBeRemoved } from '@tests/test-utils';
// test utils

import HaveIconTooltip from '@components/Tooltips/HaveIconTooltip';
// components

const TOOLTIP_TEXT = 'text' as const;
const ICON_NAME = 'Caution' as const;
const BUTTON_CONTENT = 'This is button' as const;

describe('HaveIconTooltip', () => {
  it('아이콘 포함 툴팁은 하위 요소에 렌더링에 영향을 주지 않는다.', () => {
    const { getByRole } = render(
      <HaveIconTooltip icon={ICON_NAME} text={TOOLTIP_TEXT}>
        <button type='button'>{BUTTON_CONTENT}</button>
      </HaveIconTooltip>
    );

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(BUTTON_CONTENT);
  });

  it('아이콘 포함 툴팁은 기본적으로 렌더링되지 않으며, 하위 요소에 `mouseover` 시 툴팁이 body 아래에 `text`와 아이콘을 포함하여 렌더링된 후 일정 시간이 지나면 사라진다.', async () => {
    const { getByRole, queryByRole, getByTestId } = render(
      <HaveIconTooltip icon={ICON_NAME} text={TOOLTIP_TEXT}>
        <button type='button'>{BUTTON_CONTENT}</button>
      </HaveIconTooltip>
    );

    const button = getByRole('button');
    const tooltip = queryByRole('tooltip');
    expect(tooltip).not.toBeInTheDocument();

    fireEvent.mouseOver(button);

    const renderTooltip = await waitFor(() => getByRole('tooltip'));
    expect(renderTooltip).toBeInTheDocument();
    expect(renderTooltip).toHaveTextContent(TOOLTIP_TEXT);
    getByTestId(ICON_NAME);

    fireEvent.mouseLeave(button);

    await waitForElementToBeRemoved(renderTooltip);
  });

  it('아이콘 포함 툴팁에서 `mouseleave` 후 사라지기 전에 `mouseover` 시 정상적으로 렌더링 상태를 유지한다.', async () => {
    jest.useFakeTimers();
    const { getByRole, queryByRole } = render(
      <HaveIconTooltip icon={ICON_NAME} text={TOOLTIP_TEXT}>
        <button type='button'>{BUTTON_CONTENT}</button>
      </HaveIconTooltip>
    );

    const button = getByRole('button');
    const tooltip = queryByRole('tooltip');
    expect(tooltip).not.toBeInTheDocument();

    fireEvent.mouseOver(button);

    const renderTooltip = await waitFor(() => getByRole('tooltip'));
    expect(renderTooltip).toBeInTheDocument();

    fireEvent.mouseLeave(button);

    setTimeout(() => {
      fireEvent.mouseOver(button);
      setTimeout(() => {
        expect(renderTooltip).toBeInTheDocument();
      }, 200);
    }, 100);

    act(() => {
      jest.runAllTimers();
    });
    jest.useRealTimers();
  });
});
