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
