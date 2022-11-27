import { render, fireEvent } from '@tests/test-utils';
// test utils

import ImageTooltip from '@components/Tooltips/ImageTooltip';
// components

import { initializeResizeObserver } from '@components/Tooltips/__tests__/__mock__/mockResizeObserver';
// mocks

const TOOLTIP_TEXT = 'text' as const;
const IMAGE_URL = 'https://github.com/FUBAR-ORG.git' as const;
const BUTTON_CONTENT = 'This is button' as const;

describe('ImageTooltip', () => {
  beforeAll(() => {
    initializeResizeObserver();
  });

  it('이미지 포함 툴팁은 하위 요소 렌더링에 영향을 주지 않는다.', () => {
    const { getByRole } = render(
      <ImageTooltip imageUrl={IMAGE_URL} text={TOOLTIP_TEXT}>
        <button type='button'>{BUTTON_CONTENT}</button>
      </ImageTooltip>
    );

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(BUTTON_CONTENT);
  });

  it('이미지 포함 툴팁은 기본적으로 렌더링되지 않으며, 하위 요소에 `mouseover` 시 툴팁이 body 아래에 `text`와 아이콘을 포함하여 렌더링된 후 일정 시간이 지나면 사라진다.', async () => {
    const { getByRole, queryByRole } = render(
      <ImageTooltip imageUrl={IMAGE_URL} text={TOOLTIP_TEXT}>
        <button type='button'>{BUTTON_CONTENT}</button>
      </ImageTooltip>
    );

    const button = getByRole('button');
    const tooltip = queryByRole('tooltip');
    expect(tooltip).not.toBeInTheDocument();

    fireEvent.mouseOver(button);

    const renderTooltip = getByRole('tooltip');
    expect(renderTooltip).toBeInTheDocument();
    expect(renderTooltip).toHaveTextContent(TOOLTIP_TEXT);
    getByRole('img');

    fireEvent.mouseLeave(button);

    expect(renderTooltip).not.toBeInTheDocument();
  });
});
