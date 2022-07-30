import styled from '@emotion/styled';
// React.js module

export const StyleCheckboxLabel = styled.div`
  display: inline-block;
`;

export const StyleCheckboxInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const StyleCheckbox = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;

  border: solid 1px ${({ theme }) => theme.color.thin};
  border-radius: 5px;
`;
export const StyleCheckboxText = styled.span``;
