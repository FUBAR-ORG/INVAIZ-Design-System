import OutlineCheckbox from '@components/Checkboxes/OutlineCheckbox';
import FillCheckbox from '@components/Checkboxes/FillCheckbox';
import RadioButton from '@components/Checkboxes/RadioButton';

export default function App() {
  return (
    <>
      <OutlineCheckbox text='Jump out the window. if you are the object of passion. Flee it if you feel it. Passion goes, boredom remains' />
      <OutlineCheckbox text='Please enter you text here.' />
      <FillCheckbox />
      <RadioButton />
    </>
  );
}

// const ThemeTest = styled.div`
//   color: ${({ theme }) => theme.color.light};
//   ${({ theme }) => theme.font.kopub.title1};
//   ${({ theme }) => theme.style.fontFace.kopub}
// `;
