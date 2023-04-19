import {
  CheckboxContainer,
  CheckboxLabel,
  CheckboxWrapper,
  CheckboxInput,
  CheckboxButton,
  CheckboxSpan,
} from './styles';
import { ICheckbox } from './types';

export default function Checkbox({
  children,
  checked,
  name,
  value,
  onChange,
  disabled,
  ref,
  variant,
}: ICheckbox) {
  return (
    <CheckboxContainer>
      <CheckboxLabel>
        <CheckboxWrapper>
          <CheckboxInput
            variant={variant}
            type="checkbox"
            defaultChecked={checked}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
          />
          <CheckboxButton variant={variant} />
        </CheckboxWrapper>
        <CheckboxSpan disabled={disabled}>{children}</CheckboxSpan>
      </CheckboxLabel>
    </CheckboxContainer>
  );
}
