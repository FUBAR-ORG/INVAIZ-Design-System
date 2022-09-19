import type { ReactNode } from 'react';
import type { CheckboxDefaultProps } from '@components/Checkboxes/interfaces/Checkbox.interface';
// types

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
   * 체크 박스 우측에 표시될 텍스트입니다.
   */
  text: string;
}

/**
 * 단독 선택 체크박스
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

export const ParentCheckbox = ({ isIndeterminate, ...props }: ParentCheckboxProps) => (
  <OutlineCheckboxBase
    iconComponent={
      isIndeterminate ? (
        <StyleOutlineCheckIcon size={20} icon='Subtract' className={CLASSNAME_OUTLINE_CHECK_ICON} />
      ) : (
        <StyleOutlineCheckIcon size={20} icon='Check' />
      )
    }
    {...props}
  />
);

export default OutlineCheckbox;
