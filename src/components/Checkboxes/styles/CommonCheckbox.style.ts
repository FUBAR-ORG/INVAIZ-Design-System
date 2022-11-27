import styled from '@emotion/styled';
// React modules

export const StyleCommonCheckbox = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 5px;
`;

export const StyleCommonCheckboxInput = styled.input`
  position: absolute;

  width: 100%;
  height: 100%;
  margin: 0;

  top: 0;
  left: 0;

  opacity: 0;

  cursor: inherit;

  z-index: 1;

  // &:focus {
  //   & + div {
  //     outline: solid 2px ${({ theme }) => theme.color.primary.blue500};
  //   }
  // }
`;
