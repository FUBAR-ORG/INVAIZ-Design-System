import styled from '@emotion/styled';

export const Dialog = styled.dialog`
  top: 15px;
  width: 440px;
  padding: 24px;
  border: none;
  border-radius: 5px;
  ${({ theme }) => theme.style.boxShadow.alert};
`;

export const Title = styled.h1`
  margin: 0 0 10px;
  ${({ theme }) => theme.font.kopub.contents3};
`;

export const Description = styled.p`
  margin: 0 0 20px;
  ${({ theme }) => theme.font.kopub.contents7}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  min-width: 80px;
  height: 36px;
  background: ${({ theme }) => theme.color.primary.blue500};
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;
