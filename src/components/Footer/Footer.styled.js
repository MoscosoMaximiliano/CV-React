import styled from 'styled-components'



export const Container = styled.div`
    background-color: ${({theme}) => theme.primary};
    width: 100%;
    padding: .85rem 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    text-align: center;
`

export const SocialMedias = styled.div`
    width: 100%;
    padding: 0 1rem;

    @media only screen and (min-width: 768px) {
        font-size: 2rem;
    }
`

export const LinksMedia = styled.div`
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
        justify-content: center;
    }
    
`

export const Link = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.white};
    transition: all 0.2s ease-in-out;

    @media only screen and (min-width: 768px) {
        margin: 0 1rem;
        &:hover {
            transform: scale(1.3);
            transition: 250ms;
        }
    }
`

export const Copyright = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        font-size: 2rem;
    }
`

export const NameLink = styled.a`
    padding: 0 .25rem;
    text-decoration: none;
    color: ${({theme}) => theme.secondary};
`