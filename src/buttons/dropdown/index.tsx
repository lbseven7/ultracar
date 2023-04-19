import { useRef, useState } from 'react';

import IconDown from '../../../library/icons/iconDown';
import {
  ButtonWrapper,
  ButtonStyled,
  DropdownStyled,
  DropdownSelectBox,
  DropdownSelectItem,
} from './styles';
import { IDropdownProps } from './types';

export default function ButtonDropdown({
  children,
  disabled,
  options,
  width,
  optionswidth,
  variant,
  value,
  showOption,
}: IDropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const refDropdown = useRef<HTMLDivElement>(null);

  function handleDropdown() {
    setShowDropdown((state) => !state);
  }

  function handleBlur(event: any) {
    if (!refDropdown.current?.contains(event.relatedTarget)) {
      setShowDropdown(false);
    }
  }

  return (
    <>
      <ButtonWrapper onBlur={handleBlur} ref={refDropdown}>
        {variant === 'button' && (
          <ButtonStyled disabled={disabled} width={width} variant={variant}>
            {children}{' '}
          </ButtonStyled>
        )}
        <DropdownStyled
          disabled={disabled}
          onClick={handleDropdown}
          variant={variant}
        >
          {variant === 'sorting' && (
            <>
              {children}
              {showOption && (
                <div>
                  {options?.filter((el) => el.value === value)[0].label}
                </div>
              )}
            </>
          )}
          <IconDown />
        </DropdownStyled>
        <DropdownSelectBox
          dropdown={showDropdown}
          optionswidth={optionswidth}
          onBlur={handleBlur}
        >
          {options &&
            options.map((option, index) => (
              <DropdownSelectItem
                key={index}
                onClick={() => {
                  option.action(option.value);
                  setShowDropdown(false);
                }}
              >
                {option.label} {option.component && option.component}
              </DropdownSelectItem>
            ))}
        </DropdownSelectBox>
      </ButtonWrapper>
    </>
  );
}
