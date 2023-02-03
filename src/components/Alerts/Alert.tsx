import { ReactNode } from 'react';

import { Dialog, Title, Description, ButtonWrapper, Button } from '@components/Alerts/Alert.style';

/**
 * INVAIZ Alert props
 *
 * @param open 활성화 여부
 * @param title 제목
 * @param children 내용
 * @param confirmButtonLabel 버튼 라벨(기본값: "확인")
 * @param onConfirm 버튼 클릭시 콜백 함수
 *
 * */
export interface AlertProps {
  open: boolean;
  title: string;
  children?: ReactNode;
  confirmButtonLabel?: string;
  onConfirm?: () => void;
}

/**
 * INVAIZ Alert
 *
 * @param open 활성화 여부
 * @param title 제목
 * @param children 내용
 * @param confirmButtonLabel 버튼 라벨(기본값: "확인")
 * @param onConfirm 버튼 클릭시 콜백 함수
 *
 * @returns HTMLDialogElement
 * */
const Alert = ({
  open = false,
  title,
  children,
  confirmButtonLabel = '확인',
  onConfirm,
}: AlertProps) => (
  <Dialog open={open}>
    <Title>{title}</Title>
    {children && <Description>{children}</Description>}
    <ButtonWrapper>
      <Button type='button' onClick={onConfirm}>
        {confirmButtonLabel}
      </Button>
    </ButtonWrapper>
  </Dialog>
);

export default Alert;
