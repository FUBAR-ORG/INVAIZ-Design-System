import { ReactNode } from 'react';

/**
 * INVAIZ Alert props
 *
 * @param open 활성화 여부
 * @param title 제목
 * @param subTitle 부제
 * @param dim dim(back drop) 활성화 여부
 * @param confirmButtonLabel 버튼 라벨(기본값: "확인")
 * @param children 추가 내용
 * @param onConfirm 버튼 클릭시 콜백 함수
 *
 * */
export interface AlertProps {
  open: boolean;
  title: string;
  subTitle?: string;
  dim?: boolean;
  confirmButtonLabel?: string;
  onConfirm?: () => void;
  children?: ReactNode;
}

/**
 * INVAIZ Alert
 *
 * @param open 활성화 여부
 * @param title 제목
 * @param subTitle 부제
 * @param dim dim(back drop) 활성화 여부
 * @param confirmButtonLabel 버튼 라벨(기본값: "확인")
 * @param children 추가 내용
 * @param onConfirm 버튼 클릭시 콜백 함수
 *
 * @returns HTMLDialogElement
 * */
const Alert = ({
  open,
  title,
  subTitle,
  dim = false,
  confirmButtonLabel = '확인',
  children,
  onConfirm,
}: AlertProps) => (
  <dialog open={open}>
    <p>{title}</p>
    {subTitle && <p>{subTitle}</p>}
    {children && <div>{children}</div>}
    {dim && <></>}
    <button type='button' onClick={onConfirm}>
      {confirmButtonLabel}
    </button>
  </dialog>
);

export default Alert;
