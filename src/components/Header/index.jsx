import { Link } from 'react-router-dom';

import * as S from './styles';

export function Header({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <S.Container>
        <Link to="/">Example 1</Link>
        <Link to="/example2">Example 2</Link>
        <Link to="/example3">Example 3</Link>
        <Link to="/example4">Example 4</Link>
      </S.Container>
    </>
  );
}
