import * as S from './styles'

export type EditProps = {
    label?: string
    placeholder?: string
} & EditHTMLAttributes<HTMLEditElement>

export default function Edit({ name, label, placeholder }: EditProps) {
  return (
    <S.Wrapper>
    </S.Wrapper>
  )
}
