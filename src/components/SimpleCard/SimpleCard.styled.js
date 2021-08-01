import styled from 'styled-components'

export const Card = styled.div`
    background-color: ${({theme}) => theme.secondary2};
    width: 300px;
    display: flex;
    flex-direction: column;;

    margin-bottom: 1rem;

    @media only screen and (min-width: 768px) {
        
    }
    
`

export const CardPhoto = styled.div`
    display: flex;
    justify-content: center;

    img {
        overflow: hidden;
    }
`

export const Content = styled.div`
    margin: 1rem;
`

export const Title = styled.h1`
    margin: 0;
    padding: 0;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({theme}) => theme.primary};

    transition: all 0.2s;

    @media only screen and (min-width: 768px) {
        &:hover {
            transform: scale(1.05);
        }
        
    }
`

export const Link = styled.a`
    text-align: center;
    font-size: 1.5rem;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: ${({theme}) => theme.white}

`

export const Description = styled.p`
    margin: 0;
    padding: 0;
`