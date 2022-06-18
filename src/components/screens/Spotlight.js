import React from 'react'
import styled from 'styled-components'
import tefun from '../../assests/images/Tefun-logo.svg'
import boy from "../../assests/images/spot-min.jpeg"
import arrow from '../../assests/images/arrow.svg'
import banner from '../../assests/images/brands-banner.65fa9b24ded67efad8b1edf7ffbad3a2.svg'
import appstore from '../../assests/images/grey-app-play.svg'
import googleplay from '../../assests/images/green-and-play.svg'
import lines from '../../assests/images/lines-bg.svg'
import round from '../../assests/images/elipse.svg'

export default function Spotlight() {
  return (
    <>
    <Container>
        <SubContainer>
            <Wrapper>
                <FlexContainer>
                    <Left>
                        <Heading src={tefun}/>
                        <SubHeading>Technology Fundamental Program</SubHeading>
                        <Alert>കേരളത്തിലെ <Span>20 ലക്ഷം</Span> സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് സൗജന്യമായി ടെക്ക്നോളജി പഠിക്കാം!</Alert>
                        <Description>ടാൽറോപ്പിന്റെ OTT കമ്മ്യൂണിറ്റി പ്ലാറ്റ്ഫോമായ 'യായ്'-ലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ പഠനം ആരംഭിക്കൂ.
                        Tefun-ലൂടെ ടെക്ക്നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ 'Yiaai' മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.
                        </Description>
                    </Left>
                    <Right>
                        <ImageContainer>
                            <ImgBoy src={boy}/>
                        </ImageContainer>
                        <ImageArrow src={arrow}/>
                    </Right>
                </FlexContainer>
                <BrandsContainer>
                    <Brands src={banner}/>
                </BrandsContainer>
                <RegisterContainer>
                    <LeftContainer>
                        <JoinButton>Join for free</JoinButton>
                        <BorderContainer>
                            <RegisterButton>Register school</RegisterButton>
                        </BorderContainer>
                    </LeftContainer>
                    <RightContainer>
                        <AppStore src={appstore}/>
                        <GooglePlay src={googleplay}/>
                    </RightContainer>
                </RegisterContainer>
            </Wrapper>
        </SubContainer>    
    </Container>
    </>
  )
}

const Container=styled.section`
    width: 90%;
    padding-top: 140px;
    margin: 0 auto;
    position: relative;
    `;
const SubContainer=styled.section`
    &::after{
        content: "";
        background-image: url(${round});
        position: absolute;
        width: 200px;
        height: 200px;
        right: -40px;
        bottom: -5%;
        z-index: -1;
    }
    background-image: url(${lines});
    background-size: 1000px;
    border-radius: 35px;
    overflow: hidden;
    background-position: left 10% top 0px;
    background-repeat: no-repeat;
    padding: 5% 30px;
    background-color: rgb(243, 249, 235);
    `;
const Wrapper=styled.section`
    width: 95%;
    margin: 0 auto;
    max-width: 1380px;
    `;
const FlexContainer=styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;
const Left=styled.div`
    width: 44%;
    `;
const Heading=styled.img`
    margin-bottom: 10px;
    `;
const SubHeading=styled.h3`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    `;
const Alert=styled.h2`
    font-size: 28px;
    font-weight: 800;
    max-width: 100%;
    margin-bottom: 30px;
    `;
const Span=styled.span`
    font-size: 28px;
    color: rgb(15, 167, 111);
    font-weight: 600;
    `;
const Description=styled.p`
    width: 100%;
    `;
const Right=styled.div`
    width: 53%;
    position: relative;
    `;
const ImageContainer=styled.div`
    width: 100%;
    display: block;
    transform: rotate(2deg);
    `;
const ImgBoy=styled.img`
    width: 100%;
    display: block;
    border-radius: 30px;
    `;
const ImageArrow=styled.img`
    position: absolute;
    left: -108px;
    bottom: -57px;
    z-index: 1;
    width: 180px;
    `;
const BrandsContainer=styled.div`
    width: 35%;
    margin-bottom: 35px;
    `;
const Brands=styled.img`
    display: block;
    width: 100%;
    `;
const RegisterContainer=styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;
const LeftContainer=styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    `;
const JoinButton=styled.a`
    &:hover{
        background-position: right center;
    }
    cursor: pointer;
    margin-right: 30px;
    color: rgb(255, 255, 255);
    font-size: 18px;
    width: 238px;
    height: 70px;
    display: flex;
    justify-content: center;
    font-weight: 600;
    align-items: center;
    border-radius: 10px;
    transition: all 0.5s ease 0s;
    background-size: 200%;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
    `;
const BorderContainer=styled.div`
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
    background-size: 200%;
    padding: 2px;
    width: 242px;
    height: 70px;
    border-radius: 10px;
    `;
const RegisterButton=styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(15, 167, 111);
    font-size: 18px;
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-weight: 600;
    border-radius: 8px;
    `;
const RightContainer=styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    `;
const AppStore=styled.img`
    margin-right: 20px;
    display: block;
    width: 150px;
    `;
const GooglePlay=styled.img`
    display: block;
    width: 150px;
    `;
