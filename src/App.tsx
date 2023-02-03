import { useState } from 'react';

import Alert from '@components/Alerts/Alert';

const App = () => {
  const [open, setOpen] = useState(true);

  const onClose = () => setOpen(false);

  return (
    <Alert open={open} title='title' onConfirm={onClose}>
      asd
    </Alert>
  );
};

export default App;
