import type { CheckboxDefaultProps } from '@components/Checkboxes/interfaces/Checkbox.interface';
// types

import { type ReactNode, useMemo } from 'react';
// React modules

import {
  CLASSNAME_OUTLINE_CHECK_ICON,
  StyleLabel,
  StyleOutlineCheckIcon,
  StyleOutlineCheckbox,
  StyleOutlineCheckboxInput,
  StyleOutlineCheckboxHover,
  StyleCheckboxText,
} from '@components/Checkboxes/styles/OutlineCheckbox.style';
// styles

interface OutlineCheckboxBaseProps extends OutlineCheckboxProps {
  /**
   * 내부에 렌더링할 아이콘 컴포넌트
   */
  iconComponent: ReactNode;
}

/**
 * 가장 자리가 강조된 체크박스의 베이스 컴포넌트입니다.
 */
const OutlineCheckboxBase = ({
  iconComponent,
  text,
  onChange,
  disabled,
  ...props
}: OutlineCheckboxBaseProps) => (
  <StyleLabel>
    <StyleOutlineCheckboxHover disabled={disabled}>
      <StyleOutlineCheckboxInput
        type='checkbox'
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        {...props}
      />
      <StyleOutlineCheckbox>{iconComponent}</StyleOutlineCheckbox>
    </StyleOutlineCheckboxHover>
    <StyleCheckboxText disabled={disabled}>{text}</StyleCheckboxText>
  </StyleLabel>
);

interface OutlineCheckboxProps extends CheckboxDefaultProps {
  /**
   * 체크박스 우측에 표시될 텍스트입니다.
   */
  text: string;
}

/**
 * 가장 자리 테두리가 강조된 체크박스입니다.
 */
const OutlineCheckbox = ({ ...props }: OutlineCheckboxProps) => (
  <OutlineCheckboxBase
    iconComponent={<StyleOutlineCheckIcon size={20} icon='Check' />}
    {...props}
  />
);

interface ParentCheckboxProps extends OutlineCheckboxProps {
  /**
   * 불확실한 상태 유무입니다.
   */
  isIndeterminate?: boolean;
}

/**
 * 서브 체크박스 리스트의 부모 역할 체크박스입니다.
 */
export const ParentCheckbox = ({ isIndeterminate, ...props }: ParentCheckboxProps) => {
  const indeterminateIcon = useMemo(
    () =>
      isIndeterminate ? (
        <StyleOutlineCheckIcon icon='Subtract' size={20} className={CLASSNAME_OUTLINE_CHECK_ICON} />
      ) : (
        <StyleOutlineCheckIcon icon='Check' size={20} />
      ),
    [isIndeterminate]
  );

  return <OutlineCheckboxBase iconComponent={indeterminateIcon} {...props} />;
};

export default OutlineCheckbox;
