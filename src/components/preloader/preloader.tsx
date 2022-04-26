import * as S from './preloader.styled';


function Preloader (): JSX.Element {
  return (
    <S.LoaderWrapper>
      <S.Loader data-testid="preloader"></S.Loader>
    </S.LoaderWrapper>
  );
}

export default Preloader;
