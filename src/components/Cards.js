import React from 'react';
import styled from 'styled-components';
import { AirplaneTicket, HowToReg, CloudQueue, MobiledataOff, AvTimer, Speed } from '@mui/icons-material';

const Container = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 10px 1fr 1fr 1fr 1fr 10px;
    grid-auto-rows: minmax(40px, auto);
    grid-column-gap: 10px;
    grid-row-gap: 45px;
`
const Content1 = styled.div`
    display: flex;
    flex-direction: row;
    color: #fff;
    justify-content: center;
    align-items: center;
    height: 100%;
`
const Labels = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    font-weight: bold;
`
const Values = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    justify-content: flex-start;
`
const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
`
const LogoWrapper = styled.div`
    margin: 0 auto;
    padding: 20px 20px 0px 20px;
    opacity: 0.7;
`
const Data = styled.h1`
    font -weight: bold;
    margin-bottom: 10px;
    color: #fff;
`
const Title = styled.h4`
    font-weight: 500;
`
const Subtitle = styled.i`
    font-size: 11px;
`
const Content = styled.div`
    text-align: center;
    padding: 10px;
`
const Card1 = styled.div`
    grid-column: 2/4;
    background: #4E4F50;
    border-radius: 10px;
    padding: 15px 0px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.3s;
`
const Card2 = styled.div`
    grid-row-start: 3;
    grid-column: 2/3;
    background: #557A95;
    border-radius: 10px;
    cursor: pointer;
    color: #EEEDE7;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.2s;
    &:hover{
        transform: scaleY(1.02);
    }
`
const Card3 = styled.div`
    grid-row-start: 3;
    grid-column: 3/4;
    background: #557A95;
    border-radius: 10px;
    cursor: pointer;
    color: #EEEDE7;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.2s;
    &:hover{
        transform: scaleY(1.02);
    }
`
const Card4 = styled.div`
    grid-row-start: 4;
    grid-column: 2/3;
    background: #2C3E5B;
    border-radius: 10px;
    cursor: pointer;
    color: #EEEDE7;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.2s;
    &:hover{
        transform: scaleY(1.02);
    }
`
const Card5 = styled.div`
    grid-row-start: 4;
    grid-column: 3/4;
    background: #2C3E5B;
    border-radius: 10px;
    cursor: pointer;
    color: #EEEDE7;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.2s;
    &:hover{
        transform: scaleY(1.02);
    }
`
const Card6 = styled.div`
    grid-row-start: 4;
    grid-column: 4/5;
    background: #2C3E5B;
    border-radius: 10px;
    cursor: pointer;
    color: #EEEDE7;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.2s;
    &:hover{
        transform: scaleY(1.02);
    }
`
const Card7 = styled.div`
    grid-row-start: 4;
    grid-column: 5/6;
    background: #2C3E5B;
    border-radius: 10px;
    cursor: pointer;
    color: #EEEDE7;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.2s;
    &:hover{
        transform: scaleY(1.02);
    }
`
const Card8 = styled.div`
    grid-row-start: 5;
    grid-column: 2/3;
    background: #10564F;
    border-radius: 10px;
    cursor: pointer;
    color: #EEEDE7;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.2s;
    &:hover{
        transform: scaleY(1.02);
    }
`
const Card9 = styled.div`
    grid-row-start: 5;
    grid-column: 3/4;
    background: #10564F;
    border-radius: 10px;
    cursor: pointer;
    color: #EEEDE7;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.2s;
    &:hover{
        transform: scaleY(1.02);
    }
`
const Card10 = styled.div`
    grid-row-start: 5;
    grid-column: 4/5;
    background: #10564F;
    border-radius: 10px;
    cursor: pointer;
    color: #EEEDE7;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.2s;
    &:hover{
        transform: scaleY(1.02);
    }
`
const Card11 = styled.div`
    grid-row-start: 5;
    grid-column: 5/6;
    background: #10564F;
    border-radius: 10px;
    cursor: pointer;
    color: #EEEDE7;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transition: 0.2s;
    &:hover{
        transform: scaleY(1.02);
    }
`

function Cards() {
    return (
        <Container>
            <Card1>
                <Content1>
                    <Labels>
                        <p>ServerUptime</p>
                        <p>Version</p>
                        <p>Release</p>
                    </Labels>
                    <Values>
                        <p>1809 days</p>
                        <p>smoad_server_1.1.51</p>
                        <p>02-Jul-2021</p>
                    </Values>
                </Content1>
            </Card1>
            <Card2>
                <Wrapper>
                <LogoWrapper>
                    <AirplaneTicket style={{fontSize: '45px'}}/>
                </LogoWrapper>
                <Content>
                    <Data>0</Data>
                    <Title>Total Tickets</Title>
                    <Subtitle>*past 1 hour</Subtitle>
                </Content>
                </Wrapper>
            </Card2>
            <Card3>
                <Wrapper>
                    <LogoWrapper>
                        <HowToReg style={{fontSize: '45px'}}/>
                    </LogoWrapper>
                    <Content>
                        <Data>0</Data>
                        <Title>Edge Logins</Title>
                        <Subtitle>*past 1 hour</Subtitle>
                    </Content>
                </Wrapper>
            </Card3>
            <Card4>
                <Wrapper>
                    <LogoWrapper>
                        <CloudQueue style={{fontSize: '45px'}}/>
                    </LogoWrapper>
                    <Content>
                        <Data>0 Kb/s</Data>
                        <Title>Avg. Edge WAN Traffic</Title>
                        <Subtitle>*past 1 hour (of all parts)</Subtitle>
                    </Content>
                </Wrapper>
            </Card4>
            <Card5>
                <Wrapper>
                    <LogoWrapper>
                        <MobiledataOff style={{fontSize: '45px'}}/>
                    </LogoWrapper>
                    <Content>
                        <Data>0</Data>
                        <Title>Edge WAN Packet Drops</Title>
                        <Subtitle>*past 1 hour (of all parts)</Subtitle>
                    </Content>
                </Wrapper>
            </Card5>
            <Card6>
                <Wrapper>
                    <LogoWrapper>
                        <AvTimer style={{fontSize: '45px'}}/>
                    </LogoWrapper>
                    <Content>
                        <Data>0 ms</Data>
                        <Title>Avg. Edge WAN Latency</Title>
                        <Subtitle>*past 1 hour (of all parts)</Subtitle>
                    </Content>
                </Wrapper>
            </Card6>
            <Card7>
                <Wrapper>
                    <LogoWrapper>
                        <Speed style={{fontSize: '45px'}}/>
                    </LogoWrapper>
                    <Content>
                        <Data>0 ms</Data>
                        <Title>Avg. Edge WAN Jitter</Title>
                        <Subtitle>*past 1 hour (of all parts)</Subtitle>
                    </Content>
                </Wrapper>
            </Card7>
            <Card8>
                <Wrapper>
                    <LogoWrapper>
                        <CloudQueue style={{fontSize: '45px'}}/>
                    </LogoWrapper>
                    <Content>
                        <Data>0 Kb/s</Data>
                        <Title>Avg. Edge SDWAN Traffic</Title>
                        <Subtitle>*past 1 hour</Subtitle>
                    </Content>
                </Wrapper>
            </Card8>
            <Card9>
                <Wrapper>
                    <LogoWrapper>
                        <MobiledataOff style={{fontSize: '45px'}}/>
                    </LogoWrapper>
                    <Content>
                        <Data>0</Data>
                        <Title>Edge SDWAN Packet Drops</Title>
                        <Subtitle>*past 1 hour</Subtitle>
                    </Content>
                </Wrapper>
            </Card9>
            <Card10>
                <Wrapper>
                    <LogoWrapper>
                        <AvTimer style={{fontSize: '45px'}}/>
                    </LogoWrapper>
                    <Content>
                        <Data>0 ms</Data>
                        <Title>Avg. Edge SDWAN Latency</Title>
                        <Subtitle>*past 1 hour</Subtitle>
                    </Content>
                </Wrapper>
            </Card10>
            <Card11>
                <Wrapper>
                    <LogoWrapper>
                        <Speed style={{fontSize: '45px'}}/>
                    </LogoWrapper>
                    <Content>
                        <Data>0 ms</Data>
                        <Title>Avg. Edge SDWAN Jitter</Title>
                        <Subtitle>*past 1 hour</Subtitle>
                    </Content>
                </Wrapper>
            </Card11>

        </Container>
    )
}

export default Cards
