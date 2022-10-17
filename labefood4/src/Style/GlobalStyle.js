import styled from "styled-components"

export const Box = styled.div`
text-align: center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

justify-content: center;
align-items: center;
`

export const IFutureLogo = styled.img`
  padding: 7rem 0 2rem ;
`

export const RedBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color: #e8222e;
width: 100%;
height: 100vh;
`

export const SearchBox = styled.div`

`

export const Tittle = styled.p`
padding: 0 0 0.75rem;
margin: 0.75rem;
`

export const RedButton = styled.button`

  width: 22.5rem;
  height: 2.625rem;
  margin-left: 1px;
  border-radius: 2px;
  background-color: #e8222e;
`

export const InputBoxLabel = styled.p`
position: fixed;
margin-left: 1rem;
width: 4.875rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 0.75rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.29px;
color: #b8b8b8;
z-index: 99;
background-color: white;
text-align: left;
padding-left: 0.25rem;
`

export const InputBoxRectangle = styled.div`
display: flex;
align-items: center;
width: 20.5rem;
  margin: 0.5rem 0 0;
  padding: 1.188rem 3rem 1.188rem 1rem;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`

export const InputBoxLocus = styled.div`
width: 22.5rem;
  height: 4.5rem;
  padding: 0 1rem 0.5rem;
  background-color: white;
  display: flex;
  `

export const InputBoxInput = styled.input`
width: 15rem;
height: 1.125rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000;

`

export const EyeImg = styled.img`
position: fixed;

right: 2.5rem;`

export const SearchImg = styled.img`

margin-right: 1.063rem;
`


export const CardBox = styled.div`
width: 22.5rem;

  padding: 0 0 1rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-top: 0.5rem;
  margin-left: 1rem;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export const CardImg = styled.img`
  border-radius: 8px 8px 0 0;
  width: 22.5rem;
  height: 7.5rem;
  margin: 0 0 0.75rem;
  object-fit: cover;

`

export const Restaurant = styled.p`
width: 18.5rem;
  height: 1.125rem;
  margin: 0 1rem 0.25rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e8222e;
  text-align: left;
`

export const DeliveryInfoBox = styled.div`
display: flex;
justify-content: space-between;
`

export const DeliveryInfo = styled.span`

  margin: 0 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`



export const BottomMenuStyle = styled.div`
background-color: #fff;
width: 100%;
height: 3rem;
z-index: 200;
bottom: 0;
position: fixed;
box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2) , 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
display: flex;
justify-content: space-around;

`

export const IconImg = styled.img`
margin: 0.5rem;
width: 1.8rem;
height: 1.8rem;
`

export const Filter = styled.div`
white-space: nowrap;
overflow-x: auto;
width: 22.5rem;
height: 2.625rem;
margin: 0.5rem 0 0 ;
padding: 0.75rem 0 0 1rem;
`
export const FilterButton = styled.button`
 width: 5.438rem;
  height: 1.125rem;
  margin: 0 0.5rem 0 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  font-weight: 1,2;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  background-color: white;


`

export const TittleCart = styled.p`
padding: 0 0 0.75rem;
margin: 0.75rem;


`
export const LoadingSection = styled.div `
  border-radius: 50%;
    background-color: transparent;
    border: 6px solid var(--mid-green);
    border-bottom: 6px solid transparent;
    width: 50px;
    height: 50px;
    display: block;
    margin: 45vh auto;
    
    @keyframes animationLoading {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    animation: animationLoading .8s ease-out infinite;
`
export const DetalhesRestaurant = styled.div`
`
export const ContainerImg = styled.div`

`
export const SpanDetalhesRestaurant = styled.div`
`
export const DivEnvio = styled.div`
`
export const ContainerRestaurant = styled.div` /*esse troca*/
`
export const Header = styled.div`
`
export const CardContainer = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  header {
    width: 5.688rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
    margin: 1.25rem 5.75rem 0 5.813rem;
  }
  .address {
    width: 22.5rem;
    height: 4.75rem;
    margin: 0.063rem 0 0.5rem;
    padding: 1rem;
    background-color: #eee;
  }
  .address p:nth-child(1) {
    width: 20.5rem;
    height: 1.125rem;
    margin: 0 0 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
  }
  .address p:nth-child(2) {
    width: 20.5rem;
    height: 1.125rem;
    margin: 0.5rem 0 0;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
  }
  .title h2 {
    width: 18.5rem;
    height: 1.125rem;
    opacity: 0.89;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
  }
  .price-container {
    margin-top: 2rem;
    width: 85vw;
    display: flex;
    align-items: flex-end;
    height: 4rem;
    justify-content: space-between;
  }
  .subtotal {
    width: 10.25rem;
    height: 1.125rem;
    letter-spacing: -0.39px;
  }
  .subtotal p {
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: -0.39px;
    color: #000;
  }
  .price p:nth-child(1) {
    width: 6.5rem;
    height: 1.125rem;
    margin: 2.063rem 0rem 0rem 3.75rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #000;
  }
  .price p:nth-child(2) {
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1.125rem;
    font-weight: bold;
    letter-spacing: -0.43px;
    text-align: right;
    color: #e8222e;
    margin-top: 0.875rem;
  }
  .payment-title {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 85vw;
  }
  .payment-title p {
    width: 20.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
  }
  .line {
    width: 20.5rem;
    height: 0.063rem;
    margin: 0.5rem 1rem;
    border: solid 1px #000;
  }
  .checkbox {
    display: flex;
    width: 85vw;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .checkbox input {
    width: 1.3em;
    height: 1.3em;
    background-color: white;
    border-radius: 100%;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  .submit-button {
    display: flex;
    width: 85vw;
    align-items: center;
    margin-top: 1rem;
  }
  .submit-button button {
    width: 100%;
    color: #000;
  }
  .rest-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .rest-info h2 {
    width: 20.5rem;
    height: 1.125rem;
    margin: 1rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
  }
  .rest-info p {
    width: 20.5rem;
    height: 1.125rem;
    margin: 0.5rem 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
  }
`;

export const Button = styled.button`
`
