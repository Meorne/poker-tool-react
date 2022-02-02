import styled from 'styled-components'

export const GridCard = styled.div`
  display: block;
  overflow: auto;
  height: 100%;
`
export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  height: auto;

& .CardWrapper{
  height: 0;
  overflow: hidden;
  transition: height 0.15s ease-out;

  &.visible {
    height: auto;
  }
}

&.toggle {
  cursor: pointer;

  .arrow {
    display: inline-block;
  } 
}
`
export const CardWrapper = styled.div`
  display: grid;
  width: calc(100% - 2px);
  align-content: stretch;
  grid-template-columns: repeat(6, minmax(auto, 16.66%));

  @media (max-width: 640px) {
    grid-template-columns: repeat(4, minmax(auto, 25%));
  }
`

export const Title = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  width: 100%;
  text-align: center;
  &.open .arrow {
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
`
export const Arrow = styled.span`
  display: none;
  width: 1.25rem;
  height: 1.25rem;
  position: relative;
  margin: 0 1rem;

  &:before,
  &:after {
    content: "";
    display: block;
    top: .5rem;
    position: absolute;
    width: .75rem;
    height: .1rem;
    background-color: #333;
    display: inline-block;
    transition: all .2s ease;
  }

  &:before{
    left: 0;
    transform: rotate(-45deg);
  }
  
  &:after{
    right: 0;
    transform: rotate(45deg);
  }
`
