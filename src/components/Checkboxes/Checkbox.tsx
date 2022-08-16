import type { PropsWithChildren } from 'react';
// types

import { StyleCheckboxView } from '@components/Checkboxes/styles/CommonCheckbox.style';
import {
  StyleCheckIcon,
  StyleCheckbox,
  StyleCheckboxInput,
  StyleCheckboxText,
  StyleCheckboxTextWrapper,
} from '@components/Checkboxes/styles/Checkbox.style';
// styles

export interface CheckboxDefaultProps {
  /**
   * 설정할 체크 상태입니다.
   */
  checked?: boolean;
  /**
   * 체크 상태 변경 시 발생하는 이벤트 리스너입니다.
   *
   * @param checked 변경 후의 체크 상태를 매개 변수로 입력 받습니다.
   */
  onChange?: (checked: boolean) => void;
  /**
   * 컴포넌트 비활성화 여부입니다.
   */
  disabled?: boolean;
}
export interface TextWrapperProps {
  /**
   * 체크 박스 우측에 표시될 텍스트입니다.
   */
  text?: string;
}

const TextWrapper = ({ text, children }: PropsWithChildren<TextWrapperProps>) => {
  if (!text) {
    return <>{children}</>;
  }
  return (
    <StyleCheckboxTextWrapper>
      {children}
      <StyleCheckboxText>{text}</StyleCheckboxText>
    </StyleCheckboxTextWrapper>
  );
};

export interface CheckboxProps extends CheckboxDefaultProps, TextWrapperProps {}

/**
 * 단독 선택 체크박스
 */
const Checkbox = ({ text, onChange, ...props }: CheckboxProps) => (
  <TextWrapper text={text}>
    <StyleCheckboxView>
      <StyleCheckboxInput
        type='checkbox'
        onChange={(e) => onChange?.(e.target.checked)}
        {...props}
      />
      <StyleCheckbox>
        <StyleCheckIcon size={20} icon='Check' />
      </StyleCheckbox>
    </StyleCheckboxView>
  </TextWrapper>
);

export default Checkbox;
