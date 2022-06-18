import React from 'react'
import styled from 'styled-components'
import arrow from '../../assests/images/down-arrow.svg'

export default function Questions() {
  return (
    <>
    <Container>
        <Wrapper>
            <TopSection>
            <Heading>Frequently</Heading>
                <HeadingTwo>Asked Questions</HeadingTwo>
            </TopSection>
            <MiddleSection>
                <QuestionBar>
                    <QContainer>
                        <Question><Bold>Tefun</Bold> പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?</Question>
                        <ArrowContainer><ArrowImg src={arrow}/></ArrowContainer>
                    </QContainer>
                    <ReadMore >LP, UP, HS, HSE, VHSE  സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.</ReadMore>
                </QuestionBar>

                <QuestionBar>
                    <QContainer>
                    <Question>എങ്ങനെയാണ് സ്കൂളുകൾക്ക് <Bold>Tefun</Bold> പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുക?</Question>
                        <ArrowContainer><ArrowImg src={arrow}/></ArrowContainer>
                    </QContainer>
                    <ReadMore>ഈ പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് Talrop നൽകിയിരിക്കുന്ന ഫോൺ നമ്പരിൽ കോൺടാക്ട് ചെയ്ത് പ്രോഗ്രാം സ്കൂളിൽ നടപ്പിലാക്കാവുന്നതാണ്.</ReadMore>
                </QuestionBar>

                <QuestionBar>
                    <QContainer>
                    <Question>എന്താണ് <Bold>Tefun</Bold> ലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭിക്കുന്ന നേട്ടം?</Question>
                        <ArrowContainer><ArrowImg src={arrow}/></ArrowContainer>
                    </QContainer>
                    <ReadMore>ലളിതവും രസകരവുമായ ടെക്ക്നോളജി പഠനമാണ് Tefun പ്രോഗ്രാമിലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭ്യമാകുന്നത്. AI, Robotics, IoT, 3D Printing, Metaverse, web 3.0 എന്നിങ്ങനെ 70-ൽപ്പരം ഭാവിയിലെ ടെക്ക്നോളജി സാധ്യതകളെക്കുറിച്ചാണ് Tefun വിദ്യാർത്ഥികളുടെ മുൻപിലേക്ക് എത്തിക്കുന്നത്. Tefun പ്രോഗ്രാം വിജയകരമായി പൂർത്തിയാക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നതാണ്.</ReadMore>
                </QuestionBar>

                <QuestionBar>
                    <QContainer>
                    <Question><Bold>Tefun</Bold> പ്രോഗ്രാം നിലവിലെ പഠനത്തെ ബാധിക്കുമോ?</Question>
                        <ArrowContainer><ArrowImg src={arrow}/></ArrowContainer>
                    </QContainer>
                    <ReadMore>അക്കാദമിക് പഠനത്തിന് ശേഷം ഒഴിവുസമയങ്ങളിൽ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കാവുന്നതാണ്. പത്തു മണിക്കൂറിൽ താഴെയാണ് പ്രോഗ്രാം ഡ്യൂറേഷൻ വരുന്നത്. ഒരു ദിവസം 15 മിനിറ്റ് മാറ്റിവെച്ചാൽ പ്രോഗ്രാം നിശ്ചയിച്ച കാലയളവിൽ പൂർത്തിയാക്കാവുന്നതാണ്.</ReadMore>
                </QuestionBar>

                <QuestionBar>
                    <QContainer>
                    <Question>വിദ്യാർത്ഥികൾക്ക് ഡയറക്ട് <Bold>Tefun</Bold> പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുമോ?</Question>
                        <ArrowContainer><ArrowImg src={arrow}/></ArrowContainer>
                    </QContainer>
                    <ReadMore>Tefun പ്രോഗ്രാം സ്കൂളുകൾ മുഖേനയാണ് നടപ്പിലാക്കുന്നത്. അതുകൊണ്ട് തന്നെ വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ മുഖാന്തരം മാത്രമേ പങ്കെടുക്കാൻ സാധിക്കുകയുള്ളൂ. നിങ്ങളുടെ സ്കൂൾ ഇതിൽ ഭാഗമായിട്ടില്ലെങ്കിൽ സ്കൂൾ അധികൃതരുമായി ബന്ധപ്പെട്ട ശേഷം നിങ്ങളുടെ സ്കൂൾ Tefun-ൽ രജിസ്റ്റർ ചെയ്ത് പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.</ReadMore>
                </QuestionBar>
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
      margin: 0 auto;
    width: 90%;
    max-width: 1280px;
`;
const TopSection=styled.div`
    width: 35%;
    margin: 0 auto 40px;
    text-align: center;
`;
const Heading=styled.h2`
    color: rgb(15, 167, 111);
    text-align: center;
    font-size: 34px;
    font-weight: 500;
`;
const HeadingTwo=styled.h2`
    color: rgb(45, 45, 45);
    margin-bottom: 50px;
    font-size: 34px;
    font-weight: 500;
`;
const MiddleSection=styled.ul`
    list-style: none;
    width: 65%;
    margin: 0 auto;
`;
const QuestionBar=styled.li`
    background-color: rgb(243, 249, 235);
    padding: 20px 35px;
    border-radius: 4px;
    min-height: 60px;
    overflow: hidden;
    margin-bottom: 20px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
`;
const QContainer=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center
`;
const Question=styled.p`
    font-size: 16px;
    padding: 10px 0px;
`;
const ArrowContainer=styled.div`
    display: block;
    transition: all 0.3s ease 0s;
`;
const ArrowImg=styled.img`
    height: 10px;

`;
const ReadMore=styled.h3`
    display: none;
`;
const Bold=styled.b`
    font-weight: 700;
`;

