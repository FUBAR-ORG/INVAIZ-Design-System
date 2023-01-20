import { AlertProps } from '@components/Modals/Alert';

interface ConfirmProps extends AlertProps {
  closeButtonLabel?: string;
  onClose?: () => void;
}

const Confirm = ({
  open,
  title,
  subTitle,
  dim,
  confirmButtonLabel = '확인',
  closeButtonLabel = '취소',
  children,
  onConfirm,
  onClose,
}: ConfirmProps) => {
  return <></>;
};

export default Confirm;
