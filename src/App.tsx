import Toggle from '@components/Toggles/Toggle';
import Tooltip from '@components/Tooltips/Tooltip';

export default function App() {
  return (
    <>
      <Tooltip text='test'>
        <span>
          <Toggle />
        </span>
      </Tooltip>
      <Tooltip text='test'>
        <button type='button'>This is button</button>
      </Tooltip>
    </>
  );
}
