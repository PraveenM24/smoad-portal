import React from 'react';
import styled from 'styled-components';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

const Container = styled.div`
    background: #E4DDF4;
    min-width: 200px;
    max-width: 260px;
    height: 100vh;
`
const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 30px;
`
const Logo = styled.img`
    width: 80%;
`

function Sidebar() {
    return (
        <Container>
            <ProSidebar>
            <SidebarHeader>
                <LogoWrapper>
                    <Logo src="./assets/logo-light.png" />  
                </LogoWrapper>
            </SidebarHeader>
            <SidebarContent>
                <Menu>      
                    <SubMenu title="Home" >
                      <MenuItem>Analytics <Link to="/"/></MenuItem>
                      <MenuItem>Users <Link to="/users"/></MenuItem>
                    </SubMenu>
                    <SubMenu title="Gateway" >
                      <MenuItem>Server</MenuItem>
                    </SubMenu>
                    <SubMenu title="Edge" >
                      <MenuItem>Devices</MenuItem>
                    </SubMenu>
                    <MenuItem >IMS</MenuItem>
                    <SubMenu title="Network" >
                      <MenuItem>Uplink Port</MenuItem>
                      <MenuItem>Console Port</MenuItem>
                    </SubMenu>
                    <SubMenu title="Engg. Debug">
                      <MenuItem>Jobs</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            </ProSidebar>
        </Container>        
    )
}

export default Sidebar
