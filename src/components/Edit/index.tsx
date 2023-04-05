import { EditHTMLAttributes } from 'react'
import * as S from './styles'

export type EditProps = {
    label?: string
    placeholder?: string
} & EditHTMLAttributes<HTMLEditElement>

export default function Edit({ name, label, placeholder }: EditProps) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.EditWrapper>
        <S.Edit placeholder={placeholder} />
      </S.EditWrapper>
    </S.Wrapper>
  )
}
