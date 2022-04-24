import {ReactNode} from 'react';
import { Header, Footer } from '../../../components/common/common';

type MainLayoutProps = {
  children?: ReactNode;
}

function MainLayout ({ children }: MainLayoutProps): JSX.Element {
  return (
  <>
    <Header />
    {children}
    <Footer />
  </>
  );
}

export default MainLayout;
