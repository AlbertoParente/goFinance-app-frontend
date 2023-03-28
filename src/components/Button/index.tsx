import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
    label?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Button() {
  return (
    <S.Wrapper>
      <S.Button>{Button}</S.Button>
    </S.Wrapper>
  )
}
