import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 1rem 1rem 7rem 1rem;
    flex-direction: column;
    height: auto;
    align-items: center;

    @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 100fr);
        justify-items: center;
    }
`