import Checkbox from '@components/Checkboxes/Checkbox';
import MultipleCheckbox from '@components/Checkboxes/MultipleCheckbox';

export default function App() {
  return (
    <>
      <Checkbox text='Please enter you text here.' />
      <MultipleCheckbox />
    </>
  );
}

// const ThemeTest = styled.div`
//   color: ${({ theme }) => theme.color.light};
//   ${({ theme }) => theme.font.kopub.title1};
//   ${({ theme }) => theme.style.fontFace.kopub}
// `;
