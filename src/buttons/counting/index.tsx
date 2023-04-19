import IconMinus from '../../../library/icons/iconMinus';
import IconPlus from '../../../library/icons/iconPlus';
import {
  ButtonCountingStyled,
  ButtonAction,
  ButtonCountingWrapper,
  ButtonInput,
} from './styles';

export default function ButtonCounting({ children, value, setValue }: any) {
  function handleCount(payload: number) {
    setValue(value === 0 && payload === -1 ? 0 : value + payload);
  }

  function handleChange(event: any) {
    const newValue = event.target.value.replace(/[^0-9]/g, '');
    setValue(Number(newValue));
  }

  return (
    <ButtonCountingStyled>
      {children}
      <ButtonCountingWrapper>
        <ButtonAction onClick={() => handleCount(-1)}>
          <IconMinus />
        </ButtonAction>
        <ButtonInput
          type="text"
          value={value}
          size={value.toString().length | 1}
          onChange={handleChange}
        />
        <ButtonAction onClick={() => handleCount(1)}>
          <IconPlus />
        </ButtonAction>
      </ButtonCountingWrapper>
    </ButtonCountingStyled>
  );
}
