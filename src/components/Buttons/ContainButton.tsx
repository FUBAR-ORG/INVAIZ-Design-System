import styled from '@emotion/styled';
import Button, { ButtonProps } from '@components/Buttons/Button';

export default function ContainButton({
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
  const isLoading = loading ? 'loading' : '';
  const isDisabled = disabled ? 'disabled' : '';
  const isSelected = selected ? 'selected' : '';
  const isShape = shape === 'pill' ? 'pill' : '';
  return (
    <StyledButton
      {...props}
      className={[size, isShape, isLoading, isDisabled, isSelected, props.className].join(' ')}
    >
      {loading ? '...' : children}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.primary.blue500};
  color: ${({ theme }) => theme.color.grayScale.basic.white};

  &.selected {
    background-color: ${({ theme }) => theme.color.grayScale.coolGray300};
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.grayScale.coolGray500};
  }
  &.loading {
    background-color: ${({ theme }) => theme.color.grayScale.coolGray300};
  }
  &.disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.color.system.off1};
  }
`;
