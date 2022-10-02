import Dropdown, { DROPDOWN_ITEM, FOCUSED } from '@components/Dropdowns/Dropdown';
import { render } from '@tests/test-utils';
import { fireEvent, waitFor } from '@testing-library/react';
import DropdownItem from '../DropdownItem';

const dropdownOptions = [
  { value: 0, label: 'test0' },
  { value: 1, label: 'test1' },
  { value: 2, label: 'test2' },
  { value: 3, label: 'test3' },
  { value: 4, label: 'test4' },
  { value: 5, label: 'test5' },
  { value: 6, label: 'test6' },
];

const renderDefaultItem = (option: typeof dropdownOptions[number]) => (
  <DropdownItem.Default selected={false}>{option.label}</DropdownItem.Default>
);

describe('Dropdown', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = () => console.log('scrollIntoView');
  });

  it('클릭시 아이템 목록을 확인할 수 있다.', async () => {
    const { getByRole, getByText } = render(
      <Dropdown type='default' list={dropdownOptions} render={renderDefaultItem} />
    );

    getByRole('button').click();
    await waitFor(() =>
      dropdownOptions.every((option) => expect(getByText(option.label)).toBeInTheDocument())
    );
  });

  it('DropdownItem 클릭할 수 있다.', async () => {
    const { getByRole, getByText, queryByText } = render(
      <Dropdown type='default' list={dropdownOptions} render={renderDefaultItem} />
    );

    getByRole('button').click();
    await waitFor(() =>
      dropdownOptions.every((option) => expect(getByText(option.label)).toBeInTheDocument())
    );

    const firstItem = getByText(dropdownOptions[0].label);
    firstItem.click();

    await waitFor(() =>
      dropdownOptions.every((option) => expect(queryByText(option.label)).not.toBeInTheDocument())
    );
  });

  it('Escape 클릭시 Dropdown 목록을 닫는다.', async () => {
    const { getByRole, getByText, queryByText } = render(
      <Dropdown type='default' list={dropdownOptions} render={renderDefaultItem} />
    );
    const button = getByRole('button');
    button.click();
    await waitFor(() =>
      dropdownOptions.every((option) => expect(getByText(option.label)).toBeInTheDocument())
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() =>
      dropdownOptions.every((option) => expect(queryByText(option.label)).not.toBeInTheDocument())
    );
  });

  it('키보드를 이용해 Dropdown을 선택할 수 있다.', async () => {
    const { getByRole, getByText, container, queryByText } = render(
      <Dropdown type='default' list={dropdownOptions} render={renderDefaultItem} />
    );
    const button = getByRole('button');
    button.click();
    await waitFor(() =>
      dropdownOptions.every((option) => expect(getByText(option.label)).toBeInTheDocument())
    );
    const dropdownList = Array.from(container.getElementsByClassName(DROPDOWN_ITEM));

    fireEvent.keyDown(button, { key: 'ArrowDown' });
    await waitFor(() => expect(dropdownList.at(0)).toHaveClass(FOCUSED));
    fireEvent.keyDown(button, { key: 'ArrowUp' });
    await waitFor(() => expect(dropdownList.at(dropdownList.length - 1)).toHaveClass(FOCUSED));
    fireEvent.keyDown(button, { key: 'Enter' });

    await waitFor(() =>
      dropdownOptions.every((option) => expect(queryByText(option.label)).not.toBeInTheDocument())
    );
  });
});
