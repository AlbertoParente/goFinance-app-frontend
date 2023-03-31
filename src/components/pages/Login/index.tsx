import Input from '@/components/Input'
import * as S from './styles'

export default function Login() {
  return (
    <S.Container>
      <Input name='login' label='login' placeholder='Enter your name.' />
      <Input name='password' label='Password' placeholder='Enter your password.' />
    </S.Container>
  )
}
