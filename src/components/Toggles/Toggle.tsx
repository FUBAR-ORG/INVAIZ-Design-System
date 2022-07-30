import styled from '@emotion/styled';

export interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <Label>
      <input type='checkbox' checked={checked} onChange={(e) => onChange?.(e.target.checked)} />
      <span />
    </Label>
  );
}

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  input {
    display: none;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.color.light};
    border-radius: 12px;
    transition: all 0.15s;
    &:before {
      position: absolute;
      content: '';
      width: 20px;
      height: 20px;
      top: 2px;
      left: 2px;
      background: ${({ theme }) => theme.darkColor.basic};
      border-radius: 100%;
      transition: all 0.15s;
    }
  }
  input:checked + span {
    background: ${({ theme }) => theme.color.point1};
  }
  input:checked + span:before {
    transform: translateX(24px);
  }
`;

export default Toggle;
