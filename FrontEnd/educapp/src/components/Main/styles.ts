import styled from 'styled-components'
export const Login = styled.div`
  color: var(--branco);
  border: 2px var(--azul_principal) dashed;
  border-radius: 5px;
  padding: 2rem 3rem;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 300;
  }
  input {
    padding: 0.5rem;
    display: block;
    margin: 0.7rem 0;
    width: 250px;
    border-radius: 6px;
  }
  p {
    text-align: left;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1.4rem;
    a {
      color: var(--azul_principal);
      text-decoration: none;
    }
  }
`
export const Caixa = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
  margin-top: 250px;

  align-items: center;
  text-align: center;
`
export const TextoPrincipal = styled.section`
  color: var(--branco);
  padding: 2rem;
  h1 {
    font-size: 3rem;
    padding: 3rem;
    font-weight: 300;
    strong {
      font-weight: 300;
      color: var(--azul_principal);
    }
  }
  p {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`
export const SubmitLink = styled.button`
  background-color: var(--azul_principal);
  color: var(--branco);
  text-decoration: none;
  width: 100%;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.5rem;
  display: block;
  border-radius: 6px;
  margin-bottom: 1rem;
`
export const NavLink = styled.a`
  color: var(--azul_principal);
  text-decoration: none;
  cursor: pointer;
`
