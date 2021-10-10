import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../utils/StateProvider';
import { actionTypes } from "../utils/Reducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #fff;
  color: #2B6777;
  border-radius: 10px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const LogoText = styled.h3`
  font-weight: 800;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`

function Navbar() {
    
    const [{user}, dispatch] = useStateValue();
    const history = useHistory();

    const handleLogout = () => {
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      })
      AsyncStorage.clear()
      history.push('/')
    }

    return (
      <Container>
          <Wrapper>
            <Left>
              <LogoText>
                SMOAD Core
              </LogoText>
            </Left>
            <Right onClick={() => handleLogout()}>Logout</Right>
          </Wrapper>
      </Container>
    )
}

export default Navbar
