import {ReactNode} from 'react';
import * as S from './button.styled';


function Button (props: { [x: string]: any; children: any; }): JSX.Element {
  const {children, ...restProps} = props;

  return (
  <S.Button {...restProps}>{children as ReactNode}</S.Button>
  );
}

export default Button;
