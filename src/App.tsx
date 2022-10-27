import Toggle from '@components/Toggles/Toggle';
import Tooltip from '@components/Tooltips/Tooltip';
import HaveIconTooltip from '@components/Tooltips/HaveIconTooltip';
import HaveImageTooltip from '@components/Tooltips/HaveImageTooltip';
import MultipleContentsTooltip from '@components/Tooltips/MultipleContentsTooltip';

export default function App() {
  const IMAGE_URL = 'https://cdn.imweb.me/thumbnail/20220926/c2013fe9fa523.png';
  return (
    <>
      <Tooltip text='Test'>
        <span>
          <Toggle />
        </span>
      </Tooltip>
      <HaveIconTooltip icon='Caution' text='Test'>
        <span>
          <Toggle />
        </span>
      </HaveIconTooltip>
      <HaveImageTooltip imageUrl={IMAGE_URL} text='Test'>
        <span>
          <Toggle />
        </span>
      </HaveImageTooltip>
      <MultipleContentsTooltip text='Multiple Test'>
        <span>
          <Toggle />
        </span>
        <span>
          <Toggle />
        </span>
      </MultipleContentsTooltip>
    </>
  );
}
