import styled from '@emotion/styled';
import Button, { ButtonProps } from '@components/Buttons/Button';

export default function TextButton({
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
    <StyledTextButton
      {...props}
      className={[size, isShape, isLoading, isDisabled, isSelected].join(' ')}
    >
      {loading ? '...' : <>{children}</>}
    </StyledTextButton>
  );
}

const StyledTextButton = styled(Button)`
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.color.grayScale.coolGray100};
  }
  &.selected {
    color: ${({ theme }) => theme.color.primary.blue500};
  }
  &.loading {
    color: ${({ theme }) => theme.color.grayScale.basic.black};
  }
  &.disabled {
    cursor: default;
    color: ${({ theme }) => theme.color.system.off1};
    background-color: transparent;
  }
`;
