import React from 'react';
import styled from 'styled-components';
import Cards from '../components/Cards'
import Charts from '../components/Charts'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Container = styled.div`
    background: #F2F2F2;
    height: 90vh;
    padding: 5px;
    margin-bottom: 30px; 
    overflow: scroll;
`
const BreadcrumbsWrapper = styled.div`
    margin: 20px 0 30px 20px;
`

function Home() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" style={{fontSize: '23px', fontWeight:'700', color: '#0C2D48'}}>
          Home
        </Link>,
        <Typography key="2" color="text.primary" style={{fontSize: '27px', fontWeight:'700', color: '#5885AF'}}>
          Analytics
        </Typography>,
    ];

    return (
        <Container> 
            <BreadcrumbsWrapper>        
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </BreadcrumbsWrapper>
            <Cards/>
            <Charts/>
        </Container>
    )
}

export default Home
