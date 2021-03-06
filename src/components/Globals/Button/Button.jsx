import { ButtonStyled } from './styles'

export const Button = ({ event, children, activeClass }) => {
  return (
    <>
      <ButtonStyled
        className={activeClass ? 'activeClass' : ''}
        onClick={event}>
        {children}
      </ButtonStyled>
    </>
  )
}
