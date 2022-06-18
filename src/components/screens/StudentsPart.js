import React from 'react'
import styled from 'styled-components'
import join from '../../assests/images/join-img.png'

export default function StudentsPart() {
  return (
    <>
        <Container>
        <Wrapper>
            <TopSection>
                <Green>വിദ്യാർത്ഥികൾക്ക്  
                    <Black>Tefun</Black>
                    പ്രോഗ്രാമിന്റെ ഭാഗമാകാം
                </Green>
            </TopSection>
            <MiddleSection>
                <Left>
                    <Detail>
                        <Description><Bold>Tefun</Bold> പ്രോഗ്രാം സ്കൂളിൽ ഉദ്ഘാടനം ചെയ്തതിനുശേഷം വിദ്യാർത്ഥികൾക്ക് <Bold>Tefun</Bold>-ൽ ജോയിൻ ചെയ്യാവുന്നതാണ്.</Description>
                        <Round>01</Round>
                    </Detail>
                    <Detail>
                        <Description><Bold>Talrop</Bold>-ന്റെ Web, Android, iOS പ്ലാറ്റ്ഫോമുകളിലൂടെ (yia.ai) ഓൺലൈനായി <Bold>Tefun</Bold>  പ്രോഗ്രാമിന്റെ ഭാഗമാകാം.</Description>
                        <Round>02</Round>
                    </Detail>
                    <Detail>
                        <Description>വിദ്യാർത്ഥികളുടെ മൊബൈൽ നമ്പർ നൽകിയതിനുശേഷം പ്രൊഫൈൽ തിരഞ്ഞെടുത്ത് <Bold>Tefun</Bold> പ്രോഗ്രാം സ്റ്റാർട്ട് ചെയ്യാം.</Description>
                        <Round>03</Round>
                    </Detail>
                    <Detail>
                        <Description>പ്രൊഫൈൽ ലഭ്യമല്ലെങ്കിൽ വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ കോഡും ക്ലാസും ഡിവിഷനും നൽകി <Bold>Tefun</Bold> പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കും.</Description>
                        <Round>04</Round>
                    </Detail>
                    <Detail>
                        <Description>വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും.</Description>
                        <Round>05</Round>
                    </Detail>
                    <Detail>
                        <Description><Bold>Tefun</Bold> പ്രോഗ്രാമിന്റെ അവസാനഘട്ടമായി സ്കൂൾ നിശ്ചയിക്കുന്ന ദിവസങ്ങളിൽ ഓൺലൈൻ എക്സാം ഉണ്ടായിരിക്കുന്നതാണ്.</Description>
                        <Round>06</Round>
                    </Detail>
                    <Detail>
                        <Description><Bold>Tefun</Bold> പ്രോഗ്രാം വിജയകരമായി പൂർത്തീകരിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ മുഖേന ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നു.</Description>
                        <Round className='last'>07</Round>
                    </Detail>
                </Left>
                <Right>
                    <ImageContainer>
                        <Image src={join}/>
                    </ImageContainer>
                </Right>
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
    width: 40%;
    text-align: center;
    margin: 0 60px 40px;
    `;
const Green=styled.h2`
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
const MiddleSection=styled.div`
    display: flex;
    justify-content: space-between;
    `;
const Left=styled.ul`
    width: 50%;
    `;
const Detail=styled.li`
    margin-bottom: 20px;
    padding: 15px 15px 15px 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 130px;
    border-radius: 20px;
    position: relative;
    background: rgb(254, 247, 236);
    &:nth-child(2){
        background: rgb(234, 243, 252);
    }
    &:nth-child(3){
        background: rgb(234, 243, 252);
    }
    &:nth-child(4){
        background: rgb(234, 243, 252);
    }
    &:nth-child(5){
        background: rgb(254, 247, 236);
    }
    &:nth-child(6){
        background: rgb(234, 243, 252);
    }
    &:last-child{
        .last::after{
            display: none;
        }
        background: rgb(234, 243, 252);
    }
    `;
const Description=styled.p`
    font-size: 18px;
    line-height: 1.4rem;
    `;
const Bold=styled.b`
    font-weight: 500;
    `;
const Round=styled.span`
    width: 60px;
    height: 60px;
    position: absolute;
    left: -35px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    border: 3px solid rgb(15, 167, 111);
    &::after{
        content: "";
        width: 150px;
        transform: rotate(90deg);
        position: absolute;
        border-top: 2px dashed rgb(15, 167, 111);
        top: 99px;
        left: -80%;
        z-index: -1;
    }
    `;
const Right=styled.div`
    width: 40%;
    `;
const ImageContainer=styled.div`
    position: sticky;
    top: 113px;
    `;
const Image=styled.img`
    display: block;
    width: 90%;
    `;
