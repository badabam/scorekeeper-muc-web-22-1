import styled from 'styled-components';

export default function Button({ children, onClick, isDark }) {
  return (
    <ButtonStyled isDark={isDark} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: ${props => (props.isDark ? '#666' : '#ddd')};
  color: ${props => (props.isDark ? 'white' : 'inherit')};
  border: none;
  padding: 4px 12px;
`;
