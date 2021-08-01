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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: sticky;
    width: 100%;
    height: 5vh;
    transition: right 0.3s linear;

    a {
        background-color: ${({theme}) => theme.secondary};
        color: ${({theme}) => theme.white};
        width: 100%;
        font-size: 1rem;
        margin: 0 .5rem 0 .5rem;
        text-decoration: none;
        text-align: center;
        
    }


    @media only screen and (min-width: 768px) {
        flex-direction: row;
        position: initial;
        height: auto;
        justify-content: center;
        background: ${({theme}) => theme.primary};
        height: 7vh;
        

        a {
            transition: all 0.2s ease-in-out;
            margin: 0.6rem 1rem;
            font-size: 2rem;
        }

        
        a:hover {
            background-color: #2c2e33;
            transform: scale(1.3);
            transition: 250ms;
        }
        
    }
`;

