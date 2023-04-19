import { useRef, useState } from 'react';

import Button from '../button';
import Checkbox from '../checkbox';
import { CheckboxSelectBox, CheckboxWrapper } from './styles';
import { ICheckboxSelect } from './types';

export default function CheckboxSelect({
  children,
  options,
  handleChange,
  variant,
}: ICheckboxSelect) {
  const [showCheckbox, setShowCheckbox] = useState(false);
  const refCheckboxWrapper = useRef<HTMLDivElement>(null);

  function handleCheckbox() {
    setShowCheckbox((prevState) => !prevState);
  }

  function handleBlur(event: any) {
    if (!refCheckboxWrapper.current?.contains(event.relatedTarget)) {
      setShowCheckbox(false);
    }
  }

  return (
    <>
      <CheckboxWrapper
        tabIndex={0}
        ref={refCheckboxWrapper}
        onBlur={handleBlur}
      >
        <Button
          variant="water blue inverted"
          secondary
          onClick={handleCheckbox}
        >
          {children}
        </Button>

        <CheckboxSelectBox show={showCheckbox}>
          {options.map((el: any, index: any) => (
            <div key={index}>
              <Checkbox
                variant={variant}
                name={el.fields[0]}
                onChange={handleChange}
                checked={el.checked}
                value={el.fields[0]}
              >
                {el.label}
              </Checkbox>
            </div>
          ))}
        </CheckboxSelectBox>
      </CheckboxWrapper>
    </>
  );
}
