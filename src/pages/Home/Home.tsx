import { FaFilm } from 'react-icons/fa'
import {
  Container,
  Header,
  SidebarListLi,
  HeaderContainer,
  HeaderText,
  SidebarList,
  Text,
  SideBar,
} from './styles'

export default function Home() {
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <FaFilm size="20" style={{ marginRight: '5px' }} />
          <HeaderText>Painel</HeaderText>
          <FaFilm size="20" style={{ marginRight: '5px' }} />

          <HeaderText>Home</HeaderText>
          <FaFilm size="20" style={{ marginRight: '5px' }} />

          <HeaderText>Series</HeaderText>
        </HeaderContainer>
      </Header>
      <SideBar>
        <SidebarList>
          <SidebarListLi>
            <Text>Filmes</Text>
          </SidebarListLi>
          <SidebarListLi>
            {' '}
            <Text>Lord</Text>
          </SidebarListLi>
          <SidebarListLi>
            {' '}
            <Text>Titanic</Text>
          </SidebarListLi>
          <SidebarListLi>
            {' '}
            <Text>The Row</Text>
          </SidebarListLi>
        </SidebarList>
      </SideBar>
      <Text>Home</Text>
    </Container>
  )
}
