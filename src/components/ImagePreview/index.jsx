import * as S from './styles';

export const ImagePreview = ({ dataUri }) => {
  return <S.Image src={dataUri} />;
};
