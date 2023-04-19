import { useState, useRef, useEffect } from 'react';

import IconDown from '../../../library/icons/iconDown';
import IconSearch from '../../../library/icons/iconSearch';
import {
  ButtonSearchWrapper,
  ButtonSearchStyled,
  ButtonSearchBox,
  SearchInput,
  SelectSearchButton,
} from './styles';
import { IProps } from './types';

export default function SearchButton({ children, disabled = false }: IProps) {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    setShowSearchBox((state) => !state);
  }

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [showSearchBox]);

  return (
    <ButtonSearchWrapper
      show={showSearchBox}
      onMouseLeave={() => setShowSearchBox(false)}
    >
      <ButtonSearchStyled
        show={showSearchBox}
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </ButtonSearchStyled>
      <ButtonSearchBox show={showSearchBox}>
        <SelectSearchButton>
          <span>All Pages</span>
          <IconDown />
        </SelectSearchButton>
        <IconSearch />
        <SearchInput placeholder="Search for anything" />
      </ButtonSearchBox>
    </ButtonSearchWrapper>
  );
}
