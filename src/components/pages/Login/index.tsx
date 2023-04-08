import Input from '@/components/Input'
import * as S from './styles'
import Button from '@/components/Button'

export default function Login() {
  return (
    <S.Container>
      <S.ImgLogin src='/img/logo-finance.svg' />
      <Input name='login' label='login' placeholder='Enter your name.' />
      <Input name='password' label='Password' placeholder='Enter your password.' />
      <Button>
        Enter
      </Button>
    </S.Container>
  )
}
