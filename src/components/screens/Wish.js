import React from 'react'
import styled from 'styled-components'
import jayasurya from "../../assests/images/Jayasurya_01.jpg"
import antony from "../../assests/images/Antony_vertical_thumb_.jpg"
import major from "../../assests/images/Major_Ravi_02.jpg"
import niranjana from "../../assests/images/Niranjana_01.jpg"
import bibin from "../../assests/images/Bibin-01-min.jpg"
import sandra from "../../assests/images/Sandra-01-min.jpg"
import vishnu from "../../assests/images/Vishnu-unnikrishnan-01-min.jpg"
import maniyanpilla from "../../assests/images/Maniyanpilla-Raju-01-min.jpg"
import gowri from "../../assests/images/Gowri-Nandha-01-min.jpg"
import hareesh from "../../assests/images/Hareesh-01-min.jpg"
import play from "../../assests/images/play-black.svg"


export default function Wish() {
  return (
    <Container>
        <Wrapper>
            <Topsection>
                <Heading>TEFUN-ന്</Heading>
                <Sub>ആശംസകളോടെ</Sub>
            </Topsection>
            <WishesList>
                <Wishs>
                    <PositionContainer>
                        <Cover><Image src={jayasurya}/></Cover>
                        <CoverContainer></CoverContainer>
                        <DetailsContainer>
                                <Name>Jayasurya</Name>
                                <Role>Actor</Role>
                                <SpanContainer className='hover'>
                                    <Watch><ImagePlay src={play}/></Watch>Watch Story
                                </SpanContainer>
                            </DetailsContainer>
                    </PositionContainer>
                </Wishs>
                <Wishs>
                    <PositionContainer>
                        <Cover><Image src={antony}/></Cover>
                        <CoverContainer></CoverContainer>
                        <DetailsContainer>
                                <Name>Antony Varghese</Name>
                                <Role>Actor</Role>
                                <SpanContainer className='hover'>
                                    <Watch><ImagePlay src={play}/></Watch>Watch Story
                                </SpanContainer>
                            </DetailsContainer>
                    </PositionContainer>
                </Wishs>
                <Wishs>
                <PositionContainer>
                        <Cover><Image src={major}/></Cover>
                        <CoverContainer></CoverContainer>   
                        <DetailsContainer>
                            <Name>Major Ravi</Name>
                            <Role>Actor & Director</Role>
                            <SpanContainer className='hover'>
                                <Watch><ImagePlay src={play}/></Watch>Watch Story
                            </SpanContainer>
                        </DetailsContainer>
                    </PositionContainer>
                </Wishs>
                <Wishs>
                <PositionContainer>
                        <Cover><Image src={niranjana}/></Cover>
                        <CoverContainer></CoverContainer>
                        <DetailsContainer>
                            <Name>Niranjana Anoop</Name>
                            <Role>Actress</Role>
                            <SpanContainer className='hover'>
                                <Watch><ImagePlay src={play}/></Watch>Watch Story
                            </SpanContainer>
                        </DetailsContainer>
                    </PositionContainer>
                </Wishs>
                <Wishs>
                <PositionContainer>
                        <Cover><Image src={bibin}/></Cover>
                        <CoverContainer></CoverContainer>
                        <DetailsContainer>
                            <Name>Bibin Krishna</Name>
                            <Role>Actor & Script writer</Role>
                            <SpanContainer className='hover'>
                                <Watch><ImagePlay src={play}/></Watch>Watch Story
                            </SpanContainer>
                        </DetailsContainer>
                    </PositionContainer>
                </Wishs>
                <Wishs>
                <PositionContainer>
                        <Cover><Image src={sandra}/></Cover>
                        <CoverContainer></CoverContainer>
                        <DetailsContainer>
                            <Name>Sandra Thomas</Name>
                            <Role>Actress & Producer</Role>
                            <SpanContainer className='hover'>
                                <Watch><ImagePlay src={play}/></Watch>Watch Story
                            </SpanContainer>
                        </DetailsContainer>
                    </PositionContainer> 
                </Wishs>
                <Wishs>
                <PositionContainer>
                        <Cover><Image src={vishnu}/></Cover>
                        <CoverContainer></CoverContainer>
                        <DetailsContainer>
                            <Name>Vishnu Unnikrishnan</Name>
                            <Role>Actor & Script writer</Role>
                            <SpanContainer className='hover'>
                                <Watch><ImagePlay src={play}/></Watch>Watch Story
                            </SpanContainer>
                        </DetailsContainer>
                    </PositionContainer>
                </Wishs>
                <Wishs>
                <PositionContainer>
                        <Cover><Image src={maniyanpilla}/></Cover>
                        <CoverContainer></CoverContainer>
                        <DetailsContainer>
                            <Name>Maniyanpilla Raju</Name>
                            <Role>Actor</Role>
                            <SpanContainer className='hover'>
                                <Watch><ImagePlay src={play}/></Watch>Watch Story
                            </SpanContainer>
                        </DetailsContainer>
                    </PositionContainer>
                </Wishs>
                <Wishs>
                <PositionContainer>
                        <Cover><Image src={gowri}/></Cover>
                        <CoverContainer></CoverContainer>
                        <DetailsContainer>
                            <Name>Gowri Nandha</Name>
                            <Role>Actress</Role>
                            <SpanContainer className='hover'>
                                <Watch><ImagePlay src={play}/></Watch>Watch Story
                            </SpanContainer>
                        </DetailsContainer>
                    </PositionContainer>
                </Wishs>
                <Wishs>
                <PositionContainer>
                        <Cover><Image src={hareesh}/></Cover>
                        <CoverContainer></CoverContainer>
                        <DetailsContainer>
                            <Name>Hareesh Kanaran</Name>
                            <Role>Actor</Role>
                            <SpanContainer className='hover'>
                                <Watch><ImagePlay src={play}/></Watch>Watch Story
                            </SpanContainer>
                        </DetailsContainer>
                    </PositionContainer>
                </Wishs>
            </WishesList>
        </Wrapper>
    </Container>
  )
}

const Container=styled.section`
    padding: 50px 0px;
`;
const Wrapper=styled.section`
     margin: 0 auto;
    max-width:1280px;
    width: 90%;
`;
const Topsection=styled.div`
    width: 30%;
    margin: 0 auto;
    text-align: center;
`;
const Heading=styled.h2`
    color: rgb(15, 167, 111);
    font-weight: 600;
`;
const Sub=styled.h2`
    font-size: 28px;
    font-weight: 600;
`;
const WishesList=styled.ul`
     display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    margin-top: 30px;
`;
const Wishs=styled.li`
      width: 20%;
    margin: 0px 10px 30px;
    border-radius: 10px;
    overflow: hidden;
        &:nth-child(4){
            margin-right: 0px;
        }
        &:nth-child(8){
           margin-right: 0;
        }
        &:nth-child(9){
            margin-bottom: 0;
        }
        &:last-child{
            margin-bottom: 0;
            margin-right: 0;
        }
`;
const PositionContainer=styled.div`
    position: relative;
    cursor: pointer;
`;
const Cover=styled.div`
    
`;
const Image=styled.img`
    width: 100%;
    display: block;
`;
const CoverContainer=styled.div`
     position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 100%;
    z-index: 1;
    background: linear-gradient(rgba(248, 248, 248, 0) 0%, rgb(0, 0, 0) 100%);
    opacity: 0.4;
`;
const DetailsContainer=styled.div`
     position: absolute;
    width: 90%;
    top: 0px;
    left: 0px;
    height: 90%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    &:hover .hover{
        height: 30px;
        opacity: 1;
    }
`;
const Name=styled.h3`
    color: rgb(255, 255, 255);
    font-size: 22px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 0px;
`;
const Role=styled.h4`
     font-size: 15px;
    color: rgb(255, 255, 255);
    text-align: center;
    /* margin-bottom: px; */
    font-weight: 500
`;
const SpanContainer=styled.span`
     width: 95%;
    height: 0px;
    opacity: 0;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    padding-top: 4px;
    border-radius: 6px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
`;
const Watch=styled.span`
    display: block;
    width: 10px;
    transform: translateY(-3px);
    margin-right: 4px;
    margin-top: 5px;
`;
const ImagePlay=styled.img`
    display: block;
    width: 10px;
`;