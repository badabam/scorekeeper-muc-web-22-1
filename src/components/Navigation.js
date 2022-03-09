import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button.js';

export default function Navigation() {
  return (
    <Wrapper>
      <Button as={NavLink} to="/" fullWidth>
        Play
      </Button>
      <Button as={NavLink} to="/history" fullWidth>
        History
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`;
