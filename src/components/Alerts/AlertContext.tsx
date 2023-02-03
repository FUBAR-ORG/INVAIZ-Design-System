import { type ReactNode, createContext, useState, useCallback, useContext } from 'react';

import Alert, { type AlertProps } from '@components/Alerts/Alert';

const initialState: AlertProps = {
  open: false,
  title: '',
  description: '',
  confirmButtonLabel: '확인',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onConfirm: () => {},
};

type AlertContextProps = (alertProps: AlertProps) => void;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const AlertContext = createContext<AlertContextProps>(() => {});

export const useAlert = () => {
  const openAlert = useContext(AlertContext);

  return useCallback(
    (title: string, description: string, onConfirm?: () => void, confirmButtonLabel?: string) => {
      openAlert({ open: true, title, description, confirmButtonLabel, onConfirm });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

interface AlertProviderProps {
  children: ReactNode;
}

const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alert, setAlert] = useState<AlertProps>(initialState);

  const openAlert = useCallback(
    (alertProps: AlertProps) => setAlert((prev) => ({ ...prev, ...alertProps })),
    []
  );

  const closeAlert = useCallback(() => {
    if (alert.onConfirm) {
      alert.onConfirm();
    }

    setAlert((prev) => ({ ...prev, open: false }));
  }, [alert]);

  return (
    <AlertContext.Provider value={openAlert}>
      {children}
      <Alert
        open={alert.open}
        title={alert.title}
        description={alert.description}
        confirmButtonLabel={alert.confirmButtonLabel}
        onConfirm={closeAlert}
      />
    </AlertContext.Provider>
  );
};

export default AlertProvider;
