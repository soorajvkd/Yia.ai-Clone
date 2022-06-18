import React from 'react'
import styled from 'styled-components'
import logo from '../../assests/images/logo-grey.svg'
import fbcolor from '../../assests/images/facebook-color.svg'
import fb from '../../assests/images/facebook.svg'
import insta from '../../assests/images/instagram.svg'
import instacolor from '../../assests/images/instagram-color.svg'
import linkedincolor from '../../assests/images/linkedin-color.svg'
import linkedin from '../../assests/images/linkedin.svg'
import twittercolor from '../../assests/images/twitter-color.svg'
import twitter from '../../assests/images/twitter.svg'
import youtubecolor from '../../assests/images/youtube-color.svg'
import youtube from '../../assests/images/youtube.svg'


export default function Footer() {
  return (
    <>
    <Container>
      <Wrapper>
          <FooterSection>
              <ImgContainer>
                  <Yiaai>
                    <Logo src={logo}/>
                  </Yiaai>
              </ImgContainer>
              <Social>
                <SLink href='https://www.instagram.com/talropworld/'>
                    <Icon src={instacolor} />
                    <GreyIcon  src={insta} className="color" />
                </SLink>
                <SLink href='https://www.facebook.com/talropworld/'>
                    <Icon src={fbcolor} />
                    <GreyIcon  src={fb} className="color" />
                </SLink>
                <SLink href='https://twitter.com/talropworld/'>
                    <Icon src={twittercolor} />
                    <GreyIcon  src={twitter} className="color" />
                </SLink>
                <SLink href='https://www.linkedin.com/company/talrop/'>
                    <Icon src={linkedincolor} />
                    <GreyIcon  src={linkedin} className="color" />
                </SLink>
                <SLink href='https://www.youtube.com/c/talrop/'>
                    <Icon src={youtubecolor} />
                    <GreyIcon  src={youtube} className="color" />
                </SLink>
              </Social>
              <Addres>
              <Phone href={"https://wa.me/+918589998744"}>+91 858 999 8744</Phone>
              <Email href={"mailto:yiaai@talrop.com"}>yiaai@talrop.com</Email>
              </Addres>
              <Bottom>
                  <Copyright>© 2022, Talrop Private Limited</Copyright>
                  <End>
                     <Terms>Terms of service</Terms>
                     <Policy>Privacy policy</Policy>
                  </End>
              </Bottom>
          </FooterSection>
      </Wrapper>
    </Container>
    
    
    </>
  )
}

const Container=styled.section`
    background-color: rgb(30, 30, 30);
    padding: 100px 0px 50px;
`;
const Wrapper=styled.section`
    margin: 0 auto;
    width: 90%;
    max-width: 1280px;
`;
const FooterSection=styled.div`
    width: 60%;
    margin: 0px auto;
    text-align: center;
`;
const ImgContainer=styled.div`
    width: 100px;
    display: block;
    margin: 0 auto;
`;
const Yiaai=styled.a`
   display: block;
    width: 100%;
`;
const Logo=styled.img`
    display: block;
    width: 100%;
`;
const Social=styled.div`
    display: flex;
    justify-content: space-between;
    width: 180px;
    text-align: center;
    margin: 30px auto;
`;
const SLink=styled.a`
      display: block;
    margin-right: 15px;
    height: 20px;
    position: relative;
    &:hover{
        .color{
            display: none;
        }
    }
`;
const Icon=styled.img`
    height: 100%;
    display: block;
`;
const GreyIcon=styled.img`
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
`;
const Addres=styled.div`
    display: flex;
    width: 275px;
    justify-content: space-between;
    margin: 0px auto;
`;
const Phone=styled.a`
    display: block;
    font-weight: 500;
    margin-bottom: 10px;
    color: rgb(170, 170, 170);
    font-size: 15px;
`;
const Email=styled.a`
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: rgb(170, 170, 170);
    font-size: 15px;
`;
const Bottom=styled.div`
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
`;
const Copyright=styled.p`
   font-size: 15px;
    color: rgb(170, 170, 170);
    font-weight: 500;
`;
const End=styled.div`
  display: flex;
`;
const Terms=styled.a`
    margin-right: 10px;
    display: block;
    margin-bottom: 10px;
    color: rgb(170, 170, 170);
    font-size: 15px;
    font-weight: 500;
`;
const Policy=styled.a`
   display: block;
    margin-bottom: 10px;
    color: rgb(170, 170, 170);
    font-size: 15px;
    font-weight: 500;
`;