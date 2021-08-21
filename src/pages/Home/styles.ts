import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 54rem;
  background: #1f3d7a;
`

export const Text = styled.div`
  text-align: center;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
`

export const SidebarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  display: block;
  margin-left: -80px;
`

export const SidebarListLi = styled.li`
  margin-bottom: 20px;
  font-size: 18px;
  padding: 2px 2px 2px 2px;
  color: #b3b3b3;
  /* text-align: left; */
  margin-left: 40px;
  cursor: pointer;

  &:hover {
    border: 2px solid gray;
    border-radius: 4px;
    background: purple;
  }
`

export const Header = styled.div`
  background: #2952a3;
  height: 50px;
  color: white;
  width: 100%;
  height: 60px;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 20px;
`

export const HeaderText = styled.p`
  color: white;
  text-align: center;
  font-size: 16px;
  margin-right: 40px;
`
export const SideBar = styled.div`
  display: flex;
  background: #202946;
  flex-direction: column;
  width: 133px;
  max-width: 175px;
  /* min-width: 175px; */
  padding: 13px;
  height: 110%;
  color: white;
`
