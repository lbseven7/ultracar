import { useRef, useState } from 'react';

import IconDown from '../../../library/icons/iconDown';
import {
  ButtonWrapper,
  ButtonStyled,
  DropdownSelectBox,
  DropdownSelectItem,
} from './styles';
import { IDropdownProps } from './types';

export default function AssignmentDropdown({
  disabled,
  options,
  width,
  optionswidth,
  value,
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
        <ButtonStyled
          disabled={disabled}
          width={width}
          onClick={handleDropdown}
        >
          <img src={options?.filter((el) => el.value === value)[0].image} />
          Assigned to:
          <span>
            {options?.filter((el) => el.value === value)[0].firstName}
          </span>
          <IconDown />
        </ButtonStyled>

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
                  setShowDropdown(false);
                }}
              >
                <img src={option.image} />
                {`${option.firstName} ${option.lastName}`}
              </DropdownSelectItem>
            ))}
        </DropdownSelectBox>
      </ButtonWrapper>
    </>
  );
}
