import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
`;

export const NavbarWrapper = styled.nav`
    background-color: ${({theme}) => theme.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 5vh;
    right: ${props => (props.open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    transition: right 0.3s linear;

    a {
        background-color: ${({theme}) => theme.secondary};
        color: ${({theme}) => theme.white};
        width: 100%;
        font-size: 2rem;
        margin: 2rem 1rem;
        text-decoration: none;
        text-align: center;
        
    }


    @media only screen and (min-width: 768px) {
        flex-direction: row;
        position: initial;
        height: auto;
        justify-content: center;
        background: ${({theme}) => theme.primary};
        

        a {
            transition: all 0.2s ease-in-out;
            margin: 0.6rem 1rem;
        }

        
        a:hover {
            background-color: #2c2e33;
            transform: scale(1.3);
            transition: 250ms;
        }
        
    }
`;

