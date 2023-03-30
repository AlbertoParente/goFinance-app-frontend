import styled, { css } from 'styled-components'
import { InputProps } from '.'

export const Wrapper = styled.main.attrs({
    id: 'WrapperButton'    
})`
`
export const Label = styled.label`
    ${({ theme }) => css`
        font-family: ${theme.font.family};
        font-style: normal;
        font-weidht: ${theme.font.bold}
        font-size: 16px;
        line-height: 25px;

        display: flex;
        align-items: center;
        color: ${theme.colors.black};
    `}
`

export const InputWrapper = styled.div`
        display: flex;
        flex-direction: row;
        width: fit-content;
        position: relative;
        justify-content: center;
        align-items: center;
`
export const Input = styled.input<InputProps>`
    ${({ theme }) => css`
        font-family: ${theme.font.family};
        font-style: normal;
        font-weidht: ${theme.font.bold}
        font-size: 16px;
        line-height: 25px;

        display: flex;
        align-items: center;
        color: ${theme.colors.black};
    `}
`