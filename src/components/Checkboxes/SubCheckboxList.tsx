import type { PropsWithChildren, ComponentProps } from 'react';
// types

import styled from '@emotion/styled';
// React modules

import OutlineCheckbox, { ParentCheckbox } from '@components/Checkboxes/OutlineCheckbox';
// components

function SubCheckboxList({
  children,
  text,
  onChange,
  ...props
}: PropsWithChildren<ComponentProps<typeof ParentCheckbox>>) {
  return (
    <div>
      <ParentCheckbox text={text} onChange={onChange} {...props} />
      <StyleSubCheckList>{children}</StyleSubCheckList>
    </div>
  );
}

const SubCheckboxItem = ({ ...props }: ComponentProps<typeof OutlineCheckbox>) => (
  <StyleSubCheckItem>
    <OutlineCheckbox {...props} />
  </StyleSubCheckItem>
);

SubCheckboxList.Item = SubCheckboxItem;

const StyleSubCheckList = styled.ul`
  list-style: none;

  margin: -2px 0 0 10px;
  padding: 0 0 0 20px;
`;

const StyleSubCheckItem = styled.li`
  margin-top: -10px;
`;

export default SubCheckboxList;
