import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  width: 100%;
  height: 54rem;
  background: #1f3d7a;
`

export const Text = styled.div`
  display: flex;
  /* background: orange; */
  width: 100%;
  justify-content: center;
  max-height: calc(100vh - 40px);
  overflow-y: scroll;
  position: absolute;
  color: white;
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
  width: 120px;
  max-width: 175px;
  min-width: 175px;
  padding: 13px;
  height: 110%;
  color: white;
`
