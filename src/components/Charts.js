import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

const data = {
  labels: ['Servers Up', 'Servers Down'],
  datasets: [
    {
      label: 'SMOAD Gateways',
      data: [0, 2],
      backgroundColor: [
        'rgb(106, 136, 32, 0.8)',
        'rgb(193, 199, 198, 0.8)',
      ],
      borderColor: [
        'rgb(106, 136, 32, 1)',
        'rgb(193, 199, 198, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const data1 = {
  labels: ['Servers Up', 'Servers Down'],
  datasets: [
    {
      label: 'SMOAD Gateways',
      data: [3, 2],
      backgroundColor: [
        'rgb(106, 136, 32, 0.8)',
        'rgb(193, 199, 198, 0.8)',
      ],
      borderColor: [
        'rgb(106, 136, 32, 1)',
        'rgb(193, 199, 198, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const data2 = {
  labels: ['L2 Servers', 'L3 Servers'],
  datasets: [
    {
      label: 'SMOAD Gateways',
      data: [1, 1],
      backgroundColor: [
        'rgb(255, 103, 27, 0.8)',
        'rgb(0, 93, 158, 0.8)',
      ],
      borderColor: [
        'rgb(255, 103, 27, 1)',
        'rgb(0, 93, 158, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const data3 = {
  labels: ['Beetle', 'Spider'],
  datasets: [
    {
      label: 'SMOAD Gateways',
      data: [1, 4],
      backgroundColor: [
        'rgb(255, 103, 27, 0.8)',
        'rgb(0, 93, 158, 0.8)',
      ],
      borderColor: [
        'rgb(255, 103, 27, 1)',
        'rgb(0, 93, 158, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const data4 = {
  labels: ['Assigned', 'Unassigned'],
  datasets: [
    {
      label: 'SMOAD Gateways',
      data: [4, 1],
      backgroundColor: [
        'rgb(57, 129, 112, 0.8)',
        'rgb(83, 0, 33, 0.8)',
      ],
      borderColor: [
        'rgb(57, 129, 112, 1)',
        'rgb(83, 0, 33, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Container = styled.div`
    height: 120vh;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin: 80px 40px 0px 40px; 
    border: 1px solid #E8EEF1;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 10px;
    background: #FFF;
`
const Header = styled.div`
    height: 60px;
    width: 100%;
    background: #0C2D48;
    color: #FFF;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
`
const ChartsContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
`
const ChartWrapper = styled.div`
    width: 200px;
    padding: 30px;
    cursor: pointer;
`

function Charts() {
    
    return (
        <Container>
            <Wrapper>
                <Header>
                  SMOAD Gateways - 2
                </Header>
                <ChartsContainer>
                  <ChartWrapper>
                    <Doughnut data={data} />
                  </ChartWrapper>
                  <ChartWrapper>
                    <Doughnut data={data2} />
                  </ChartWrapper>
                </ChartsContainer>
            </Wrapper>
            <Wrapper>
                <Header>
                  SMOAD Edge Devices - 5
                </Header>
                <ChartsContainer>
                  <ChartWrapper>
                    <Doughnut data={data1} />
                  </ChartWrapper>
                  <ChartWrapper>
                    <Doughnut data={data3} />
                  </ChartWrapper>
                  <ChartWrapper>
                    <Doughnut data={data4} />
                  </ChartWrapper>
                </ChartsContainer>
            </Wrapper>
        </Container>
    )
}

export default Charts
