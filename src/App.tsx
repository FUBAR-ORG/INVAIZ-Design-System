import Toggle from '@components/Toggles/Toggle';
import Tooltip from '@components/Tooltips/Tooltip';
import IconTooltip from '@components/Tooltips/IconTooltip';
import ImageTooltip from '@components/Tooltips/ImageTooltip';

export default function App() {
  const IMAGE_URL = 'https://cdn.imweb.me/thumbnail/20220926/c2013fe9fa523.png';
  return (
    <>
      <Tooltip text='Test' isArrow>
        <span>
          <Toggle />
        </span>
      </Tooltip>
      <IconTooltip icon='Download' text='Test'>
        <span>
          <Toggle />
        </span>
      </IconTooltip>
      <ImageTooltip imageUrl={IMAGE_URL} text='Test' isArrow>
        <span>
          <Toggle />
        </span>
      </ImageTooltip>
    </>
  );
}
