import styled from 'styled-components'

const transitionSpeed = `0.3s`

export const FullSizeCard = styled.div`
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
  & .fakeCard {
    width: auto;
    height: auto;
    max-width: calc(100% - 100px);
    max-height: calc(100% - 100px);
  }
  
  & .fakeCard {
    & .wrapper {
      border-radius: 5vw;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-width: 1vw;
      box-shadow: 1vw 1vw 3vw 0 rgba(0,0,0,.5);
    }

    & .strStyle {
      font-size: 10vw;
    }
    
    @media only screen 
    and (max-width: 1024px)
    and (orientation: landscape) {
      & .strStyle{
        font-size: 20vw;
      }
    }

    @media only screen 
    and (max-width: 1024px) 
    and (orientation: portrait) {
      & .strStyle{
        font-size: 30vw;
      }
    }
  }
`
export const RefreshBtn = styled.button`
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
