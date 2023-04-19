import {
  ToggleButton,
  ToggleContainer,
  ToggleInput,
  ToggleLabel,
  ToggleSpan,
  ToggleWrapper,
} from './styles';
import { IToggle } from './types';

export default function Toggle({
  children,
  checked,
  disabled,
  onChange,
  name,
  value,
  position,
}: IToggle) {
  return (
    <ToggleContainer>
      <ToggleLabel>
        {position === 'before' && <ToggleSpan>{children}</ToggleSpan>}
        <ToggleWrapper>
          <ToggleInput
            disabled={disabled}
            type="checkbox"
            defaultChecked={checked}
            onChange={onChange}
            name={name}
            value={value}
          />
          <ToggleButton disabled={disabled} checked={checked} />
        </ToggleWrapper>
        {position === 'after' && <ToggleSpan>{children}</ToggleSpan>}
      </ToggleLabel>
    </ToggleContainer>
  );
}
