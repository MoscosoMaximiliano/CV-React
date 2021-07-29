import styled from 'styled-components'

export const AboutMeS = styled.div`
    display: flex;
    margin: 0;
    padding: 1rem 1rem;
    flex-direction: column;
    height: 100vh;

    p {
        text-align: center;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;

    h1, h2, h3, h4 {
        color: ${({theme}) => theme.primary};
        margin: 0;
        padding: 0;
    }

    @media only screen and (min-width: 768px) {
        h1 {
            font-size: 6rem;
        }
    }

    strong {
        color : ${({theme}) => theme.white};
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Photo = styled.div`
    position: relative;
    width: 50%;
    padding-bottom: 50%;
    border-radius: 50%;
    overflow: hidden;

    img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        object-position: 100% 45%;
        z-index: -100;
    }

    @media only screen and (min-width: 768px) {
        width: 25%;
        padding-bottom: 25%;
    }

`