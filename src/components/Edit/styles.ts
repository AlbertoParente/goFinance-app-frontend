import styled, { css } from 'styled-components'

export const Edit = styled.edit`
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