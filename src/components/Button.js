import styled from 'styled-components';

export default function Button({
  children,
  onClick,
  isDark,
  fullWidth,
  as = 'button',
  ...props
}) {
  return (
    <ButtonStyled
      as={as}
      className={isDark && 'active'}
      onClick={onClick}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  border: none;
  text-decoration: none;
  padding: 4px 12px;
  color: inherit;
  ${props => props.fullWidth && 'width: 100%;'}

  &.active {
    background-color: #666;
    color: white;
  }
`;
