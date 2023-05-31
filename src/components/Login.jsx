import styled from "styled-components"
import LinkedIn from '../images/LinkedIn.png'

export const Login = () => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img width={100} src={LinkedIn} />
                </a>
            </Nav>
        </Container>
    )
}

const Container = styled.div``
const Nav = styled.nav`` 