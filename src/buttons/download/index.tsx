import IconDownload from '../../../library/icons/iconDownload';
import { DownloadStyled } from './styles';
import { IDownload } from './types';

export default function Download({ href, disabled, target }: IDownload) {
  return (
    <DownloadStyled href={href} target={target} disabled={disabled}>
      <IconDownload />
    </DownloadStyled>
  );
}
