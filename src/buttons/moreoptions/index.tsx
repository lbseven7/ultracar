import { useState, useRef } from 'react';

import {
  ButtonWrapper,
  ButtonMoreOptionsStyled,
  DropdownStyled,
  DropdownItem,
  DropdownIcon,
} from './styles';
import { IProps } from './types';

export default function ButtonMoreOptions({
  children,
  dropdown = true,
  onClick,
  options,
  disabled,
}: IProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const refButton = useRef<HTMLDivElement>(null);

  function handleClick() {
    setShowDropdown((state) => !state);
  }

  function handleBlur(event: any) {
    if (!refButton.current?.contains(event.relatedTarget)) {
      setShowDropdown(false);
    }
  }

  return (
    <ButtonWrapper onBlur={handleBlur} ref={refButton}>
      <ButtonMoreOptionsStyled
        disabled={disabled}
        onClick={() => {
          handleClick();
          onClick && onClick();
        }}
      >
        {children}
      </ButtonMoreOptionsStyled>

      {dropdown && showDropdown && (
        <DropdownStyled dropdown={showDropdown} position="left">
          {options &&
            options.map((option, index) => (
              <DropdownItem
                key={index}
                onClick={() => {
                  option.action();
                  setShowDropdown(false);
                }}
              >
                <DropdownIcon>{option.icon}</DropdownIcon> {option.label}
              </DropdownItem>
            ))}
        </DropdownStyled>
      )}
    </ButtonWrapper>
  );
}
