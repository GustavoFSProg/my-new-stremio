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
          <HeaderText>Painel</HeaderText>
          <HeaderText>Home</HeaderText>
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
