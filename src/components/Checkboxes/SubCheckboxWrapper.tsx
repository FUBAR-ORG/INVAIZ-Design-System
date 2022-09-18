import type { PropsWithChildren } from 'react';
// types

import styled from '@emotion/styled';
// React modules

import OutlineCheckbox, {
  type OutlineCheckboxProps,
  type ParentCheckboxProps,
  ParentCheckbox,
} from '@components/Checkboxes/OutlineCheckbox';
// components

function SubCheckboxWrapper({
  children,
  text,
  onChange,
  ...props
}: PropsWithChildren<ParentCheckboxProps>) {
  return (
    <div>
      <ParentCheckbox text={text} onChange={onChange} {...props} />
      <StyleSubCheckList>{children}</StyleSubCheckList>
    </div>
  );
}

const SubCheckboxItem = ({ ...props }: OutlineCheckboxProps) => (
  <StyleSubCheckItem>
    <OutlineCheckbox {...props} />
  </StyleSubCheckItem>
);

SubCheckboxWrapper.Item = SubCheckboxItem;

const StyleSubCheckList = styled.ul`
  list-style: none;

  margin: -2px 0 0 10px;
  padding: 0 0 0 20px;
`;

const StyleSubCheckItem = styled.li`
  margin-top: -10px;
`;

export default SubCheckboxWrapper;
