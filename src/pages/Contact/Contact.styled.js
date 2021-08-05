import styled from 'styled-components'

export const Container = styled.div`
    height: 60vh;
    margin: 5rem 2rem;
    padding: 1rem;
    background-color: none;
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 25px;

    @media only screen and (min-width: 768px) {
        margin-bottom: 12.3rem;
    }
`

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    @media only screen and (min-width: 768px) {
        font-size: 2rem;
    }
`

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
`

export const LabelText = styled.label`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.white};
    margin: .5rem 0;
`

export const Input = styled.input`
    background-color: ${({ theme }) => theme.secondary};
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 25px;
    text-align: center;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.white};
    margin-bottom: .5rem;
    outline: none;
    
    &::placeholder {
        text-align: center;
    }

    @media only screen and (min-width: 768px) {
        font-size: 2rem;
        padding: 2rem;

        &::placeholder {
            font-size: 1.5rem;
        }
    }
`

export const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 160px;
    padding: 1rem;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.white};
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 25px;
    outline: none;
    text-align: center;

    &::placeholder {
        text-align: center;
        padding: .25rem;
    }

    @media only screen and (min-width: 768px) {
        font-size: 2rem;
        height: 300px;

        &::placeholder {
            font-size: 1.5rem;
        }
    }
`

export const Btn = styled.button`
    background-color: ${({ theme }) => theme.primary};
    border-radius: 25px;
    border-style: none;
    padding: 1rem;
    color: ${({ theme }) => theme.white};
    transition: all 0.2s;
    
    @media only screen and (min-width: 768px) {
        font-size: 2rem;

        &:hover {
            transform: scale(1.02);
        }
        
    }
`