import { MemoHTMLAttributes } from 'react'
import * as S from './styles'

export type MemoProps = {
    Memo?: string
    placeholder?: string
} & MemoHTMLAttributes<HTMLMemoElement>

export default function Memo({ name, Memo, placeholder }: MemoProps) {
  return (
    <S.Wrapper>
      <S.Memo htmlFor={name}>{Memo}</S.Memo>
      <S.MemoWrapper>
        <S.Memo placeholder={placeholder} />
      </S.MemoWrapper>
    </S.Wrapper>
  )
}
