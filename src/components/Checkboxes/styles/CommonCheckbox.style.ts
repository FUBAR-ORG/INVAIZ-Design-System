import styled from '@emotion/styled';
// React modules

export const StyleCheckboxView = styled.div`
  position: relative;

  display: inline-block;
  width: 40px;
  height: 40px;

  cursor: pointer;
  padding: 10px;

  box-sizing: border-box;

  vertical-align: middle;
`;

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

  cursor: pointer;
`;
