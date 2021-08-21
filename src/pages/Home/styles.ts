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
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
`

export const SidebarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  display: block;
  margin-left: -35px;
`

export const SidebarListLi = styled.li`
  margin-bottom: 20px;
  font-size: 18px;
  padding: 2px 2px 2px 2px;
  color: #b3b3b3;
  text-align: left;
  cursor: pointer;

  &:hover {
    border: 2px solid gray;
    border-radius: 4px;
    background: purple;
  }
`

export const Header = styled.div`
  background: #2e5cb8;
  height: 50px;
  color: white;
  width: 100%;
  height: 70px;
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
