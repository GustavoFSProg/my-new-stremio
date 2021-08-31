import { useEffect, useState } from 'react'
import { FaFilm } from 'react-icons/fa'
import Card from '../../components/Card'
import Navbar from '../../components/Header'
import api from '../../services/api'
import {
  Container,
  Header,
  SidebarListLi,
  HeaderContainer,
  HeaderText,
  SidebarList,
  Text,
  SideBar,
  Content,
  ListMovies,
  SideBarLeft,
} from './styles'

const movies = [
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
  {
    title: 'o Titulo',
    image: 'https://source.unsplash.com/random',
  },
]

// type Iproducts = {
//   title: string
//   price: string
//   description: string
//   image: string
// }

export default function HomeDois() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [productsList, setProductsList] = useState([])

  async function getAllProducts() {
    const { data } = await api.get('/')
    setProductsList(data)
    return data
  }

  useEffect(() => {
    getAllProducts()
    // handleCart(productId)
  }, [])

  return (
    <Container>
      <Navbar />
      <Content>
        <SideBar>
          <SidebarList>
            <SidebarListLi>
              <Text>Filmes</Text>
            </SidebarListLi>
            <SidebarListLi>
              <Text>Lord</Text>
            </SidebarListLi>
            <SidebarListLi>
              <Text>Titanic</Text>
            </SidebarListLi>
            <SidebarListLi>
              <Text>The Row</Text>
            </SidebarListLi>
          </SidebarList>
        </SideBar>
        <ListMovies>
          {movies.map((movie) => {
            return <Card image={movie.image} />
            // return <Card image={`https://ecomerce-api.herokuapp.com/files/${movie.image}`} />
          })}
        </ListMovies>
        <SideBarLeft>
          <SidebarList>
            <SidebarListLi>
              <Text>Filmes</Text>
            </SidebarListLi>
            <SidebarListLi>
              <Text>Lord</Text>
            </SidebarListLi>
            <SidebarListLi>
              <Text>Titanic</Text>
            </SidebarListLi>
            <SidebarListLi>
              <Text>The Row</Text>
            </SidebarListLi>
          </SidebarList>
        </SideBarLeft>
      </Content>
    </Container>
  )
}
