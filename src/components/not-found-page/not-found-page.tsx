import { Link } from 'react-router-dom';
import { MainLayout, PageTitle, PageSubtext } from '../../components/common/common';
import * as S from './not-found-page.styled';

function NotFoundPage (): JSX.Element {
  return (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>404</PageTitle>
          <PageSubtext>Страница не найдена</PageSubtext>
        </S.PageHeading>
        <S.QuestDescription>
          Такой страницы не существует. Но у нас есть <Link to='/' style={{color: '#d4790e'}}><b>множество квестов.</b></Link>
        </S.QuestDescription>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
  );
}

export default NotFoundPage;
