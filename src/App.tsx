import Checkbox from '@components/Checkboxs/Checkbox';
import MultipleCheckbox from '@components/Checkboxs/MultipleCheckbox';

export default function App() {
  return (
    <>
      <Checkbox text='Please enter you text here.' />
      <MultipleCheckbox locked />
    </>
  );
}
