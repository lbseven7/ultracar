import { ButtonStyled } from './styles';
import { ISmallButton } from './types';

export default function SmallButton({
  children,
  disabled,
  onClick,
}: ISmallButton) {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
}
