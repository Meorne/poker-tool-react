import styled from 'styled-components'

export const SmallCard = styled.div`
  cursor: pointer;
  padding:5px;
`
export const ImgCard = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`
export const FakeCard = styled.div`
  position: relative;
  cursor: pointer;

  & > img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display: block;
    visibility: hidden;
  }
  
  & .wrapper {
    border: ${({ colors }) => colors?.border || `#333`} .5vw solid;
    border-radius: 2vw;
    box-sizing: border-box;
    position: absolute;
    top: 5px;
    bottom: 5px;
    left: 5px;
    right: 5px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: ${({ colors }) => colors?.bg || `#efeff0`};
  }
  
  & .strStyle{
    font-family: 'theboldfont', 'Raleway', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
    text-align: center;
    color: ${({ colors }) => colors?.font || `#000`};
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media only screen and (orientation: landscape) {
    & .strStyle{
      font-size: 3rem;
    }
  }
`
