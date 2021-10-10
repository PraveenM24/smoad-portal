import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';


const options = [
    { key: 1, text: 'Limited', value: 1 },
    { key: 2, text: 'Admin', value: 2 },
  ]

const Container = styled.div`
    height: fit-content;
    margin-bottom: 60px;
`
const Wrapper = styled.div`
    width: 95%;
    height: 70%;
    margin: 20px auto;
    background: #fff;
    border: 1px solid #e1e1e1;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`
const Title = styled.h2`
    color: #5f5f5f;
    margin-bottom: 20px;
`
const InputFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InputField = styled.div`
    margin: 5px 0px;
    width: 95%;
`
const InputTextField = styled.input.attrs({
    type: 'text'
})`
    background: #fff;
    width: 95%;
    float: left;
    padding: 12px 25px;
    margin: 5px 0px;
    border: 1px solid #e1e1e1;
    outline: none;
    border-radius: 5px;
    -webkit-transition: all 0.20s ease-in-out;
    -moz-transition: all 0.20s ease-in-out;
    -ms-transition: all 0.20s ease-in-out;
    -o-transition: all 0.20s ease-in-out;
    outline: none;
    &:focus{
        box-shadow: 0 0 4px #a3a3a3;
        border: 1px solid #707070;
    }
`
const InputPasswordField = styled.input.attrs({
    type: 'password'
})`
    background: #fff;
    width: 95%;
    float: left;
    padding: 12px 25px;
    margin: 5px 0px;
    border: 1px solid #e1e1e1;
    outline: none;
    border-radius: 5px;
    -webkit-transition: all 0.20s ease-in-out;
    -moz-transition: all 0.20s ease-in-out;
    -ms-transition: all 0.20s ease-in-out;
    -o-transition: all 0.20s ease-in-out;
    outline: none;
    &:focus{
        box-shadow: 0 0 4px #a3a3a3;
        border: 1px solid #707070;
    }
`
const AddButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px
`
const buttonTheme = createTheme({
    palette: {
      primary: {
        main: '#0C2D48',
      },
    },
});

function Forms() {
    return (
        <Container>
            <Wrapper>
                <Title>Add User</Title>
                <InputFieldWrapper>                    
                    <InputTextField placeholder="Name"/>
                    <InputTextField placeholder="Username"/>                    
                    <InputPasswordField placeholder="Password"/>                    
                    <InputTextField placeholder="Area"/>
                    <InputField>                        
                        <Dropdown placeholder="Access" fluid clearable options={options} selection />
                    </InputField>
                    <AddButton>
                        <Button theme={buttonTheme} startIcon={<AddIcon/>} variant="contained">Add User</Button>
                    </AddButton>  
                </InputFieldWrapper>
            </Wrapper>
        </Container>
    )
}

export default Forms
