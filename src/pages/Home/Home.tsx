import { Container, Header, SidebarListLi, SidebarList, Text, SideBar } from './styles'

export default function Home() {
  return (
    <Container>
      <Header></Header>
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
