import * as S from './styles'

export type ButtonProps = {
    label?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Button() {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{Label}</S.Label>
    </S.Wrapper>
  )
}
