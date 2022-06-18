import React from 'react'
import styled from 'styled-components'
import phone from '../../assests/images/phone-g-call.svg'
import certificatetwo from '../../assests/images/certificate.svg'
import logodetails from '../../assests/images/scissors.svg'
import certificate from '../../assests/images/certificate-r.svg'
import devices from '../../assests/images/devices.svg'

export default function SchoolPart() {
  return (
    <>
          <Container>
        <Wrapper>
            <TopSection>
                <HeadingColoured>സ്കൂളുകൾക്ക്  
                    <Black>Tefun</Black>
                    പ്രോഗ്രാമിന്റെ ഭാഗമാകാം
                </HeadingColoured>
            </TopSection>
            <MiddleSection>
                <Detail>
                    <Box>
                        <Round><Image src={phone}/></Round>
                    </Box>
                    <Description><Bold>Tefun</Bold> പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് <Bold>Talrop</Bold>-ന്റെ ടീമുമായി <Call href="https://wa.me/+918589998744" target="_blank">858 999 8744</Call> എന്ന നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.</Description>
                </Detail>
                <Detail >
                    <Box className='two'>
                        <Round className='twoborder'><Image src={logodetails}/></Round>
                    </Box>
                    <Description>സ്കൂളിന്റെ ലോഗോയും അവശ്യ വിവരങ്ങളും നൽകുക.</Description>
                </Detail>
                <Detail>
                    <Box className='three'>
                        <Round className='threeborder'><Image src={certificate}/></Round>
                    </Box>
                    <Description>സ്കൂൾ നിശ്ചയിക്കുന്ന ഉദ്ഘാടന ദിനത്തിൽ ആവശ്യമായ Inauguration Video ഡിജിറ്റലായി <Bold>Talrop</Bold> നൽകുന്നതാണ്.</Description>
                </Detail>
                <Detail>
                    <Box className='four'>
                        <Round className='fourborder'><Image src={devices}/></Round>
                    </Box>
                    <Description><Bold>Mobile,Tab,Laptop,Desktop Computer</Bold> എന്നിവയിൽ ഏതെങ്കിലും ഡിവൈസുകൾ ഉപയോഗിച്ച് <Bold>Talrop</Bold> ലഭ്യമാക്കുന്ന <Bold>Web, Android, iOS</Bold> പ്ലാറ്റ്ഫോമുകളിലൂടെ കുട്ടികൾക്ക് പഠിക്കുവാൻ സാധിക്കും.</Description>
                </Detail>
                <Detail>
                    <Box className='five'>
                        <Round className='fiveborder'><Image src={certificatetwo}/></Round>
                    </Box>
                    <Description>വിജയകരമായി പൂർത്തീകരിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നു.</Description>
                </Detail>
            </MiddleSection>
            <BottomSection>
                <JoinButton>Join for free</JoinButton>
            </BottomSection>
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
    width: 40%;
    text-align: center;
    margin: 0 auto 60px ;
    `;
const HeadingColoured=styled.h2`
    font-size: 28px;
    color: rgb(15, 167, 111);
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    `;
const Black=styled.h2`
    font-size: 45px;
    color: #000;
    font-weight: 600;
    margin-left: 10px;
    `;
const MiddleSection=styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 50px;
    `;
const Detail=styled.li`
    width: 30%;
    margin-bottom: 50px;
    &:nth-child(2){
        .two{
            background: rgb(251, 184, 44);
        }
        .twoborder{
            border: 2px solid rgb(251, 184, 44);
        }
    }
    &:nth-child(3){
        .three{
            background: rgb(255, 91, 47)
        }
        .threeborder{
            border: 2px solid rgb(255, 91, 47);
        }
    }
    &:nth-child(4){
        .four{
            background: rgb(178, 87, 255)
        }
        .fourborder{
            border: 2px solid rgb(178, 87, 255);
        }
        margin-bottom: 0;
    }
    &:nth-child(5){
        .five{
            background: rgb(76, 154, 254)
        }
        .fiveborder{
            border: 2px solid rgb(76, 154, 254);
        }
        margin-bottom: 0;
    }
    `;
const Box=styled.div`
    width: 150px;
    height: 150px;
    margin: 0px auto 50px;
    border-radius: 30px;
    transform: rotate(45deg);
    position: relative;
    background: rgb(0, 154, 102);
    `;
const Round=styled.span`
    position: absolute;
    bottom: 25%;
    right: -20%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(0, 154, 102);
    `;
const Image=styled.img`
    display: block;
    width: 40%;
    transform: rotate(-45deg);
    `;
const Description=styled.p`
    margin: 0px auto;
    text-align: center;
    font-size: 18px;
    `;
const BottomSection=styled.div`
    margin: 0 auto;
    width: 25%;
    text-align: center;
    `;
const JoinButton=styled.a`
    cursor: pointer;
    margin: 0px auto;
    color: rgb(255, 255, 255);
    font-size: 18px;
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: all 0.5s ease 0s;
    background-size: 200%;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
    &:hover{
        background-position: right center;
    }
    font-weight: 500;
    `;
const Bold=styled.b`
    font-weight: 500;
    `;
const Call=styled.a`
    color: rgb(15, 167, 111);
    `;