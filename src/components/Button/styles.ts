import styled, { css } from 'styled-components'
import { ButtonWrapper } from '.'

export const ButtonWrapper = styled.button.attrs({
    'data-testid': 'ButtonWrapper'
})<ButtonProps>`
    ${({ theme, disable }) => css`
        font-family: ${theme.font.family};
        font-weight: bold;
        font-size: 16px;
        line-height: 16px;
        padding: 14px 60px;

        border-radius: 5px;
        cursor: pointer;
    `}
`
