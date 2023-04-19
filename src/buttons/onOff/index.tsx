import { useState } from 'react';

import {
  OnOffButton,
  OnOffContainer,
  OnOffLabel,
  OnOffSpan,
  OnOffWrapper,
} from './styles';
import { IOnOff } from './types';

export default function OnOff({
  children,
  checked,
  disabled,
  position,
}: IOnOff) {
  const [check, setCheck] = useState(checked || false);

  function handleChange() {
    setCheck((state) => !state);
  }

  return (
    <OnOffContainer>
      <OnOffLabel>
        {position === 'before' && <OnOffSpan>{children}</OnOffSpan>}
        <OnOffWrapper>
          <OnOffButton
            disabled={disabled}
            checked={check}
            onClick={handleChange}
          >
            {check ? 'On' : 'Off'}
          </OnOffButton>
        </OnOffWrapper>
        {position === 'after' && <OnOffSpan>{children}</OnOffSpan>}
      </OnOffLabel>
    </OnOffContainer>
  );
}
