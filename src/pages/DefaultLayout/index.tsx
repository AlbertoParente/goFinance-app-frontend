import * as S from './styles'

type DefaultLayoutProps = {
    children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <S.Container>
            <S.Header>
                
            </S.Header>
            {children}
        </S.Container>    
    )
}

export default DefaultLayout

