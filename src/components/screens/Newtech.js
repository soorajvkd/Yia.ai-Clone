import React from 'react'
import styled from 'styled-components'
import ai from '../../assests/images/ai.jpg'
import robotics from '../../assests/images/robotics.jpg'
import metaverse from '../../assests/images/meta.jpg'
import threed from '../../assests/images/3d.jpg'
import web from '../../assests/images/Group+49584.jpg'
import arvr from '../../assests/images/ar&vr.jpg'
import iot from '../../assests/images/iot.jpg'
import car from '../../assests/images/car.jpg'
import banner from '../../assests/images/card.svg'


export default function Newtech() {
  return (
    <>
        <Container>
            <Wrapper>
                <TopSection>
                    <ColouredHeading>പുതിയ ടെക്ക്നോളജികൾ മനസ്സിലാക്കാം</ColouredHeading>
                    <Heading>ടെക്ക്-പഠനം വേറിട്ടതും, ക്രിയാത്മകവുമാക്കാൻ കഴിയുന്ന സിലബസ്.</Heading>
                </TopSection>
                <MiddleSection>
                    <SyllabusType >
                        <ImageContainer >
                            <Image src={ai}/>
                        </ImageContainer>
                        <SyllabusName>Artificial Intelligence</SyllabusName>
                    </SyllabusType>
                    <SyllabusType>
                        <ImageContainer>
                            <Image src={robotics}/>
                        </ImageContainer>
                        <SyllabusName>Robotics</SyllabusName>
                    </SyllabusType>
                    <SyllabusType>
                        <ImageContainer>
                            <Image src={metaverse}/>
                        </ImageContainer>
                        <SyllabusName>Metaverse</SyllabusName>
                    </SyllabusType>
                    <SyllabusType>
                        <ImageContainer>
                            <Image src={threed}/>
                        </ImageContainer>
                        <SyllabusName>3D Printing</SyllabusName>
                    </SyllabusType>
                    <SyllabusType>
                        <ImageContainer>
                            <Image src={web}/>
                        </ImageContainer>
                        <SyllabusName>Web 3.0</SyllabusName>
                    </SyllabusType>
                    <SyllabusType>
                        <ImageContainer>
                            <Image src={arvr}/>
                        </ImageContainer>
                        <SyllabusName>AR & VR</SyllabusName>
                    </SyllabusType>
                    <SyllabusType>
                        <ImageContainer>
                            <Image src={iot}/>
                        </ImageContainer>
                        <SyllabusName>IoT</SyllabusName>
                    </SyllabusType>
                    <SyllabusType>
                        <ImageContainer>
                            <Image src={car}/>
                        </ImageContainer>
                        <SyllabusName>Driveless Cars</SyllabusName>
                    </SyllabusType>
                    <BannerImage src={banner}/>
                </MiddleSection>
            </Wrapper>
        </Container>
    </>
  )
}
const Container=styled.section`
    padding: 50px 0px;
    `;
const Wrapper=styled.section`
    width: 90%;
    margin: 0 auto;
    max-width: 1280px;
    `;
const TopSection=styled.div`
    width: 60%;
    margin: 0 auto;
    text-align: center;
    `;
const ColouredHeading=styled.h2`
    font-size: 28px;
    margin-bottom: 30px;
    color: rgb(15, 167, 111);
    font-weight: 500;
    `;
const Heading=styled.h3`
    width: 60%;
    margin: 0 auto;
    font-size: 22px;
    font-weight: 500;
    `;
const MiddleSection=styled.ul`
    width: 96%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    list-style: none;
    `;
const SyllabusType=styled.li`
    width: 20%;
    border-radius: 10px;
    margin: 0px 10px 10px;
    padding: 15px;
    &:nth-child(1){
        background-color: rgb(255, 248, 228);
    }
    &:nth-child(2){
        background-color: rgb(226, 249, 221);
    }
    &:nth-child(3){
        background-color: rgb(239, 234, 250);
    }
    &:nth-child(4){
        background-color: rgb(255, 246, 237);
    }
    &:nth-child(5){
        background-color: rgb(235, 242, 250);
    }
    &:nth-child(6){
        background-color: rgb(227, 244, 230);
    }
    &:nth-child(7){
        background-color: rgb(227, 244, 230);
    }
    &:nth-child(8){
        background-color: rgb(249, 238, 251);
    }
    `;
const ImageContainer=styled.div`
    overflow: hidden;
    border-radius: 10px;
    width: 100%;
    `;
const Image=styled.img`
    display: block;
    width: 100%;
    `;
const SyllabusName=styled.h4`
    display: block;
    font-size: 20px;
    margin: 20px auto 0px;
    text-align: center;
    font-weight: 600;
    `;
const BannerImage=styled.img`
    position: absolute;
    right: -110px;
    bottom: -15%;
    width: 250px;
    `;