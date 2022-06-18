import React from 'react'
import styled from 'styled-components'
import lines from '../../assests/images/lines-bg.svg'
import googleplay from '../../assests/images/green-app-play.svg'
import appstore from '../../assests/images/green-and-play.svg'
import phone from '../../assests/images/mobile-app.png'

export default function GetIt() {
  return (
    <>
     <Container>
        <Wrapper>
            <ContentSection>
                <Left>
                    <Heading>ടാൽറോപിന്റെ OTT കമ്മ്യൂണിറ്റി പ്ലാറ്റ്‌ഫോമായ യായിലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ പഠനം ആരംഭിക്കൂ</Heading>
                    <Description>Tefun-ലൂടെ ടെക്ക്‌നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ yia.ai മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.</Description>
                    <ImagesContainer>
                        <AppStore href="https://apps.apple.com/in/app/yiaai-ott-community-platform/id1609634713"><Image src={appstore}/></AppStore>
                        <AppStore href="https://play.google.com/store/apps/details?id=com.yiaai"><Image src={googleplay}/></AppStore>
                    </ImagesContainer>
                </Left>
                <Right>
                    <ImageContainer>
                        <ImagePhone src={phone}/>
                    </ImageContainer>
                </Right>
            </ContentSection>
        </Wrapper>
    </Container>
    </>
  )
}
const Container=styled.section`
    padding: 50px 0px ;
    `;
const Wrapper=styled.section`
    margin: 0 auto;
    width: 90%;
    max-width: 1280px;
    `;
const ContentSection=styled.div`
    background-color: rgb(243, 249, 235);
    background-image: url(${lines});
    background-position: left 10% top 0px;
    background-repeat: no-repeat;
    background-size: 700px;
    border-radius: 20px;
    padding: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    `;
const Left=styled.div`
    width: 48%;
    `;
const Heading=styled.h3`
    font-size: 24px;
    width: 90%;
    margin-bottom: 35px;
    font-weight: 600;
    `;
const Description=styled.p`
    width: 90%;
    font-size: 20px;
    color: rgb(100, 101, 99);
    margin-bottom: 30px;
    line-height: 1.3em;
    `;
const ImagesContainer=styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    `;
const Image=styled.img`
    display: block;
    width: 100%;
    `;
const AppStore=styled.a`
    width: 150px;
    display: block;
    margin-right: 10px;
    `;
const Right=styled.div`
    width: 48%;

    `;
const ImageContainer=styled.div`
    width: 100%;
    `;
const ImagePhone=styled.img`
    display: block;
    width: 53%;
    position: absolute;
    bottom: -20%;
    right: 0%;
    `;