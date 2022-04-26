import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../../const';
import logo from '../../../assets/img/logo.svg';
import * as S from './header.styled';

function Header (): JSX.Element {
  const location = useLocation();

  console.log(location)

  return (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
      <S.Links>
          <S.LinkItem>
            <S.Link $isActiveLink={location.pathname === AppRoute.Index}  to={AppRoute.Index}>
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppRoute.CoomingSoon}>Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppRoute.CoomingSoon}>Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link to={AppRoute.CoomingSoon}>Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink={location.pathname === AppRoute.Contacts} to={AppRoute.Contacts}>Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
  );
}

export default Header;
