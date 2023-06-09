import styled, { css } from 'styled-components'
import { InputProps } from '.'

export const Wrapper = styled.main.attrs({
    id: 'WrapperButton'    
})`
`
export const Input = styled.input`
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
export const Input = styled.Input<InputProps>`
    ${({ theme }) => css`
        padding: 20px 120px 20px 10px;
        border: 1px solid ${theme.colors.lightGray};
        background: ${theme.colors.white};
        box-sizing: border-box;
        border-radius: 7px;
        height: fit-content;

        margin: 5px 0;
    `}
`
