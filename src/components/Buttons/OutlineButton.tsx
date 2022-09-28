import styled from '@emotion/styled';
import Button, { ButtonProps } from '@components/Buttons/Button';

export default function OutlineButton({
  children,
  /** 버튼 사이즈 */
  size = 'default',
  /** 버튼 사용 여부 */
  disabled,
  /** 버튼 로딩 상태 */
  loading = false,
  /** 버튼 선택 여부 */
  selected,
  shape = 'default',
  ...props
}: ButtonProps) {
  const isLoading = loading && 'loading';
  const isDisabled = disabled && 'disabled';
  const isSelected = selected && 'selected';
  const isShape = shape === 'pill' && 'pill';
  return (
    <StyledButton
      {...props}
      className={[size, isShape, isLoading, isDisabled, isSelected].join(' ')}
    >
      {loading ? '...' : <>{children}</>}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.grayScale.coolGray500};

  &.selected {
    border: 1px solid ${({ theme }) => theme.color.grayScale.coolGray500};
    background-color: ${({ theme }) => theme.color.grayScale.coolGray100};
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.primary.blue500};
    background-color: ${({ theme }) => theme.color.grayScale.coolGray100};
  }
  &.loading {
    border: 1px solid ${({ theme }) => theme.color.grayScale.coolGray500};
    background-color: ${({ theme }) => theme.color.grayScale.coolGray200};
  }
  &.disabled {
    cursor: default;
    border: 1px solid ${({ theme }) => theme.color.grayScale.coolGray100};
    color: ${({ theme }) => theme.color.system.off1};
    background-color: transparent;
  }
`;
