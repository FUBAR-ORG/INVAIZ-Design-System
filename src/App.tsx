import AlertProvider, { useAlert } from '@components/Alerts/AlertContext';

const ExampleContainer = () => {
  const openAlert = useAlert();

  const onOpenAlert = () => openAlert('Title', 'Description', () => console.log('click confirm'));

  return (
    <button type='button' onClick={onOpenAlert}>
      Alert
    </button>
  );
};

const App = () => (
  <AlertProvider>
    <ExampleContainer />
  </AlertProvider>
);

export default App;
