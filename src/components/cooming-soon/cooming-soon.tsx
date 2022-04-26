import { MainLayout, PageTitle} from '../../components/common/common';
import * as S from './cooming-soon.styled';

function CoomingSoon (): JSX.Element {
  return (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>Страница в разработке</PageTitle>
        </S.PageHeading>
        <S.QuestDescription>
          К сожалению страница еще не создана. Мы работаем над ее созданием.
        </S.QuestDescription>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
  );
}

export default CoomingSoon;
