import * as S from './styles'

export type InputProps = {
    label?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Input() {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{Label}</S.Label>
    </S.Wrapper>
  )
}
