import type { PropsWithChildren, ComponentProps } from 'react';
// types

import styled from '@emotion/styled';
// React modules

import OutlineCheckbox, { ParentCheckbox } from '@components/Checkboxes/OutlineCheckbox';
// components

/**
 * 중첩으로 계층 구조를 표현할 수 있는 체크박스 아이템을 포함하고 있는 컴포넌트입니다.
 *
 * * 아이템 요소를 `NestedCheckbox.Item`과 같이 사용할 수 있는 `Compound Pattern`을 사용합니다.
 */
function NestedCheckbox({
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof ParentCheckbox>>) {
  return (
    <div>
      <ParentCheckbox {...props} />
      <StyleNestedCheckList>{children}</StyleNestedCheckList>
    </div>
  );
}

const NestedCheckboxItem = ({ ...props }: ComponentProps<typeof OutlineCheckbox>) => (
  <StyleNestedCheckItem>
    <OutlineCheckbox {...props} />
  </StyleNestedCheckItem>
);

/**
 * 중첩 계층 구조를 표현할 때 사용하는 체크박스 아이템 컴포넌트입니다.
 */
NestedCheckbox.Item = NestedCheckboxItem;

const StyleNestedCheckList = styled.ul`
  list-style: none;

  margin: -2px 0 0 10px;
  padding: 0 0 0 20px;

  & > li + div {
    margin-top: -10px;
  }
`;

const StyleNestedCheckItem = styled.li`
  margin-top: -10px;
`;

export default NestedCheckbox;
