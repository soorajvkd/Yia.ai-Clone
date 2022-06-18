import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import vizhinjam from '../../assests/images/Dr.APJ_Abdhul_Kalam_Public_School_Vizhinjam_.jpg'
import karichara from '../../assests/images/GLPS_Karichara.jpg'
import vellanickal from '../../assests/images/GLPS_VELLANICKAL_.jpg'
import channankara from '../../assests/images/Govt_LPS_channankara_.jpg'
import kadinamkulam from '../../assests/images/Govt_LPS_KADINAMKULAM_.jpg'
import kuzhivila from '../../assests/images/Govt_UPS_Kuzhivila_ (1).jpg'
import nedumangad from '../../assests/images/Kairali_Vidhya_____Bhavan_Nedumangad_.jpg'
import padiyam from '../../assests/images/Kittiyil_AUPS_padiyam (1).jpg'
import perumathura from '../../assests/images/SIUP_School_Perumathura_.jpg'
import thumba from '../../assests/images/GOVT_LPS_Thumba__.jpg'
import locationimage from '../../assests/images/Location.svg'

export default function Campuses() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
    }
  return (
    <>
    <Container>
        <Wrapper>
            <TopSection>
                <Heading><ColouredHeading>Associated </ColouredHeading> Campuses</Heading>
                <Description>Various institutions have joined hands with us, to train their students and improve their employability skills, along with moulding them to be future entrepreneurs.</Description>
            </TopSection>
        <SliderContainer>
        <Slider {...settings}>
          <School>
            <ImageContainer>
                <Image src={kadinamkulam}/>
            </ImageContainer>
            <SchoolName>Govt LP School Kadinamkulam</SchoolName>
            <Location><LocationImage src={locationimage}/>Thiruvananthapuram</Location>
          </School>
          <School>
            <ImageContainer>
                <Image src={karichara}/>
            </ImageContainer>
            <SchoolName>Govt LP School Karichara</SchoolName>
            <Location><LocationImage src={locationimage}/>Thiruvananthapuram</Location>
          </School>
          <School>
            <ImageContainer>
                <Image src={vellanickal}/>
            </ImageContainer>
            <SchoolName>Govt LP School VELLANICKAL</SchoolName>
            <Location><LocationImage src={locationimage}/>Thiruvananthapuram</Location>
          </School>
          <School>
            <ImageContainer>
                <Image src={channankara}/>
            </ImageContainer>
            <SchoolName>Govt LP School Channankara</SchoolName>
            <Location><LocationImage src={locationimage}/>Thiruvananthapuram</Location>
          </School>
          <School>
            <ImageContainer>
                <Image src={vizhinjam}/>
            </ImageContainer>
            <SchoolName>Dr APJ Abdul Kalam Public School</SchoolName>
            <Location><LocationImage src={locationimage}/>Thiruvananthapuram</Location>
          </School>
          <School>
            <ImageContainer>
                <Image src={perumathura}/>
            </ImageContainer>
            <SchoolName>Shamsul Islam Upper Primary School</SchoolName>
            <Location><LocationImage src={locationimage}/>Thiruvananthapuram</Location>
          </School>
          <School>
            <ImageContainer>
                <Image src={padiyam}/>
            </ImageContainer>
            <SchoolName>Kuttiyil AUPS Padiyam</SchoolName>
            <Location><LocationImage src={locationimage}/>Malappuram</Location>
          </School>
        </Slider>
        </SliderContainer>
        <CampusesContainer>
        <CampusesList>
          <School>
            <ImageContainer>
                <Image src={nedumangad}/>
            </ImageContainer>
            <SchoolName>AMRITA Kairali Vidya Bhavan CBSE School</SchoolName>
            <Location><LocationImage src={locationimage}/>Thiruvananthapuram</Location>
          </School>
          <School>
            <ImageContainer>
                <Image src={thumba}/>
            </ImageContainer>
            <SchoolName>Govt LP School Thumba</SchoolName>
            <Location><LocationImage src={locationimage}/>Thiruvananthapuram</Location>
          </School>
          <School>
            <ImageContainer>
                <Image src={kuzhivila}/>
            </ImageContainer>
            <SchoolName>Govt UP School Kuzhivila</SchoolName>
            <Location><LocationImage src={locationimage}/>Thiruvananthapuram</Location>
          </School>
          <School>
            <ImageContainer>
                <Image src={nedumangad}/>
            </ImageContainer>
            <SchoolName>AMRITA Kairali Vidya Bhavan CBSE School</SchoolName>
            <Location><LocationImage src={locationimage}/>Thiruvananthapuram</Location>
          </School>
          <School>
            <ImageContainer>
                <Image src={thumba}/>
            </ImageContainer>
            <SchoolName>Govt LP School Thumba</SchoolName>
            <Location><LocationImage src={locationimage}/>Thiruvananthapuram</Location>
          </School>
          <School>
            <ImageContainer>
                <Image src={kuzhivila}/>
            </ImageContainer>
            <SchoolName>Govt UP School Kuzhivila</SchoolName>
            <Location><LocationImage src={locationimage}/>Thiruvananthapuram</Location>
          </School>
        </CampusesList>
        </CampusesContainer>
            <BottomSection>
                <Numbers>And<ColouredNumbers>300+ </ColouredNumbers> campuses all over Kerala</Numbers>
            </BottomSection>
        </Wrapper>
    </Container>
    </>
  )
}

const Container=styled.section`
    padding: 100px 0px 100px;
    background-color: rgb(249, 252, 245);
    `;
const Wrapper=styled.section`
    margin: 0 auto;
    max-width:1280px;
    width: 90%;
    `;
const TopSection=styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    `;
const Heading=styled.h2`
    font-size: 35px;
    color: rgb(45, 45, 45);
    margin-bottom: 30px;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    `;
const ColouredHeading=styled.h2`
    color: rgb(15, 167, 111);
    font-size: 35px;
    font-weight: 600;
    margin-right: 10px;
    `;
const Description=styled.p`
    margin: 0px auto;
    max-width: 70%;
    font-size: 18px;
    font-weight: 500;
    `;
const SliderContainer=styled.div`
    margin:30px auto 50px;
    width: 90%;
    `;
const School=styled.div`
    width: 250px;
    margin-bottom: 50px;
    `;
const ImageContainer=styled.div`
    border-radius: 4px;
    overflow: hidden;
    height: 150px;
    margin-bottom: 0px;
    width: 90%;
    `;
const Image=styled.img`
    display: block;
    width: 100%;
    `;
const SchoolName=styled.h4`
    line-height: 1.2;
    font-size: 16px;
    margin-top: 0px;
    width: 90%;
    font-weight: 600;
    `;
const Location=styled.h5`
    line-height: 1.2;
    font-size: 14px;
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: rgb(15, 167, 111);
    `;
const LocationImage=styled.img`
    transform: translateY(-2px);
    margin-right: 6px;
    width: 12px;
    filter: invert(100%) sepia(93%) saturate(1416%) hue-rotate(49deg) brightness(119%) contrast(52%);
    `;
const BottomSection=styled.div`
    width: 40%;
    margin: 0 auto;
    text-align: center;
    `;
const Numbers=styled.h3`
    font-size: 24px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    `;
const ColouredNumbers=styled.h3`
    color: rgb(15, 167, 111);
    font-size: 24px;
    font-weight: 500;
    margin: 0px 7px 0px;
    `;
const CampusesContainer=styled.div`
    
    `;
const CampusesList=styled.div`
    display: flex;
    justify-content: space-between;
    `;