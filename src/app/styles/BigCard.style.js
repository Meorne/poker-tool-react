import styled from 'styled-components'

const transitionSpeed = `0.3s`

export const FullSizeCard = styled.div.attrs(() => ({ className: `FullSizeCard` }))`
  position: fixed;
  z-index: 1;
  background-color: #efeff0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity ${transitionSpeed} linear, 
  visibility 0.01s linear ${transitionSpeed};
  user-select: none;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  & .SmallCard {
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  
  &.activ {
    visibility: visible;
    opacity: 1;
    transition: opacity ${transitionSpeed} linear 0.01s, 
    visibility ${transitionSpeed} linear;
  }

  & .imgCard,
  & .FakeCard {
    width: auto;
    height: auto;
    max-width: calc(100% - 100px);
    max-height: calc(100% - 100px);
  }
  
  & .FakeCard {
    & .wrapper {
      border-radius: 3vw;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-width: .5vw;
      box-shadow: .5vw .5vw 2vw 0 rgba(0,0,0,.5);
    }

    & .strStyle {
      zoom: 200%;
    }
    @media only screen 
    and (max-width: 1024px) {
      & .wrapper {
        border-width: 1vw;
        box-shadow: 1vw 1vw 6vw 0 rgba(0,0,0,.5);
      }
    }
    @media only screen 
    and (max-width: 1024px) 
    and (orientation: portrait) {
      & .strStyle{
        zoom: 500%;
      }
      & .wrapper {
        border-radius: 6vw;
      }
    }
    @media only screen 
    and (max-width: 1024px) 
    and (orientation: landscape) {
      & .strStyle{
        zoom: 300%;
      }
    }
  }
`
export const RefreshBtn = styled.button.attrs(() => ({ className: `RefreshBtn` }))`
  display: none;
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  z-index: 10;
  margin: 0 0 20px 20px;
  border: none;

  &.show{
    display: block;
  }
`
