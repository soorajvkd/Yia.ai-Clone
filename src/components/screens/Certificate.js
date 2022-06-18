import React from 'react'
import styled from 'styled-components'
import certificate from '../../assests/images/certificate.png'
import medal from '../../assests/images/medal+.svg'
import arrow from '../../assests/images/arrow.svg'

export default function Certificate() {
  return (
    <>
        <Container>
        <Wrapper>
            <FlexContainer>
                <Left>
                    <MedalImg src={medal}/>
                    <Heading>Certification</Heading>
                    <Description>പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും സ്കൂൾ ലോഗോയോടു കൂടിയ കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റുകൾ.</Description>
                </Left>
                <Right>
                    <ImageContainer>
                        <CertificateImg src={certificate}/>
                    </ImageContainer>
                    <ArrowImg src={arrow}/>
                </Right>
            </FlexContainer>
        </Wrapper>
    </Container>
    
    </>
  )
}
const Container=styled.section`
    padding: 50px;
`;
const Wrapper=styled.section`
       width: 90%;
    margin: 0 auto;
    max-width: 1280px;
`;
const FlexContainer=styled.div`
      display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 100%);
    border-radius: 20px;
    min-height: 300px;
`;
const Left=styled.div`
    width: 55%;
    padding-left: 50px;
`;
const MedalImg=styled.img`
    position: absolute;
    display: block;
    width: 3%;
    top: 0px;
    `;
    const Heading=styled.h2`
    color: rgb(255, 255, 255);
    font-size: 40px;
    font-weight: 600;
    `;
    const Description=styled.p`
    width: 80%;
    color: rgb(255, 255, 255);
    font-size: 20px;
    margin-bottom: 10px;
    `;
const Right=styled.div`
    width: 45%;
`;
const ImageContainer=styled.div`
    width: 100%;
    height: 100%;
    `;
const CertificateImg=styled.img`
    position: absolute;
    display: block;
    width: 550px;
    bottom: -63px;
    right: 7%;
`;
const ArrowImg=styled.img`
    display: block;
    position: absolute;
    bottom: -130px;
    right: 540px;
    `;
