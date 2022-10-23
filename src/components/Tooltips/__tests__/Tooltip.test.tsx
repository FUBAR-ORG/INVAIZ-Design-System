import { render, fireEvent, act, waitFor, waitForElementToBeRemoved } from '@tests/test-utils';
// test utils

import Tooltip from '@components/Tooltips/Tooltip';
// components

const TOOLTIP_TEXT = 'text' as const;
const BUTTON_CONTENT = 'This is button' as const;
// constant

describe('Tooltip', () => {
  it('툴팁은 적용된 요소에 기본적으로 영향을 주지 않는다.', () => {
    const { getByRole } = render(
      <Tooltip text={TOOLTIP_TEXT}>
        <button type='button'>{BUTTON_CONTENT}</button>
      </Tooltip>
    );

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(BUTTON_CONTENT);
  });

  it('적용된 요소에 `mouseover` 시 툴팁이 브라우저에 렌더링된다.', async () => {
    const { getByRole, queryByRole } = render(
      <Tooltip text={TOOLTIP_TEXT}>
        <button type='button'>This is button</button>
      </Tooltip>
    );

    const tooltip = queryByRole('tooltip');
    expect(tooltip).not.toBeInTheDocument();

    fireEvent.mouseOver(getByRole('button'));

    const renderTooltip = await waitFor(() => getByRole('tooltip'));
    expect(renderTooltip).toBeInTheDocument();
  });

  it('툴팁 컴포넌트에 `mouseleave` 후 일정 시간이 지나면 사라진다.', async () => {
    const { getByRole, queryByRole } = render(
      <Tooltip text={TOOLTIP_TEXT}>
        <button type='button'>This is button</button>
      </Tooltip>
    );

    const button = getByRole('button');
    const tooltip = queryByRole('tooltip');
    expect(tooltip).not.toBeInTheDocument();

    fireEvent.mouseOver(button);

    const renderTooltip = await waitFor(() => getByRole('tooltip'));
    expect(renderTooltip).toBeInTheDocument();

    fireEvent.mouseLeave(button);

    await waitForElementToBeRemoved(renderTooltip);
  });

  it('툴팁 `mouseleave` 후 사라지기 전에 `mouseover` 시 정상적으로 렌더링 상태를 유지한다.', async () => {
    jest.useFakeTimers();
    const { getByRole, queryByRole } = render(
      <Tooltip text={TOOLTIP_TEXT}>
        <button type='button'>This is button</button>
      </Tooltip>
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
      }, 2000);
    }, 1000);

    act(() => {
      jest.runAllTimers();
    });
    jest.useRealTimers();
  });
});
