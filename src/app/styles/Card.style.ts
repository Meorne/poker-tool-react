import styled from 'styled-components'

export const SmallCard = styled.div.attrs(() => ({ className: `SmallCard` }))`
  cursor: pointer;
  padding:5px;
`
export const ImgCard = styled.img.attrs(() => ({ className: `ImgCard` }))`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`
interface FakeCardProps {
  colors? : {
    border: string
    bg: string,
    font: string
  },
  customStyle: string
}
export const FakeCard = styled.div.attrs(() => ({ className: `FakeCard` }))<FakeCardProps>`
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
    font-size: 6vw;
    font-weight: bold;
    width: 100%;
    text-align: center;
    color: ${({ colors }) => colors?.font || `#000`};
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  @media only screen 
    and (orientation: portrait){
    & .strStyle{
      zoom: 170% ;
    }
  }

  ${({ customStyle }) => customStyle || ``};

`
