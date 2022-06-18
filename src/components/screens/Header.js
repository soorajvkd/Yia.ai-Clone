import React from 'react'
import styled from 'styled-components';
import logo from "../../assests/images/logo.svg";

export default function Header() {
  return (
    <>
     <Container>
        <Wrapper>
            <Left>
                <AContainer>
                    <Logo src={logo}/>
                </AContainer>
            </Left>
            <Right>
                <Button>Join now</Button>
            </Right>
        </Wrapper>
    </Container>

    </>
  )
}


const Container=styled.section`
    width: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;  
    box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
    `;
const Wrapper=styled.section`
    margin: 0 auto;
    max-width:1280px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;
const Left=styled.h1`
    width: 120px;
    display: block;
 `;
const AContainer=styled.a`
    width: 100%;
    display: block;
`;
const Logo=styled.img`
    width: 100%;
    display: block;
    `;
const Right=styled.div`
    
`;
const Button=styled.a`
    &:hover{
        background-position: right center;
    }
    border-radius: 5px;
    display: block;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 500;
    padding: 15px 30px;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 50%, rgb(99, 187, 76) 100%);
    transition: all 0.5s ease 0s;
    cursor: pointer;
    background-size: 200%;
    `;