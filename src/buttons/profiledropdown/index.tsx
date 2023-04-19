import profile from '../../../assets/images/profile.jpg';
import IconDown from '../../../library/icons/iconDown';
import { ButtonImage, ButtonWrapper } from './styles';

export default function ProfileDropdown() {
  return (
    <ButtonWrapper>
      <ButtonImage>
        <img
          src={profile}
          style={{
            borderRadius: '12px',
          }}
        />
      </ButtonImage>
      <IconDown />
    </ButtonWrapper>
  );
}
