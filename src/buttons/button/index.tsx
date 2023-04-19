import IconBack from '../../../library/icons/iconBack';
import IconDownload from '../../../library/icons/iconDownload';
import IconForward from '../../../library/icons/iconForward';
import { ButtonStyled } from './styles';
import { IButtonProps } from './types';

export default function Button({
  children,
  type = 'button',
  variant,
  disabled,
  onClick,
  primary,
  secondary,
  tertiary,
  rounded,
  large,
  small,
  day,
  width,
  active,
  range,
}: IButtonProps) {
  return (
    <ButtonStyled
      type={type}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      primary={primary}
      secondary={secondary}
      tertiary={tertiary}
      rounded={rounded}
      large={large}
      small={small}
      day={day}
      width={width}
      active={active}
      range={range}
    >
      {variant === 'back' && <IconBack />}
      {variant === 'download' && <IconDownload />}
      {children}
      {large && variant === 'forward action' && <IconForward />}
    </ButtonStyled>
  );
}
