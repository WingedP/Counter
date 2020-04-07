import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '../App.css';


export default function Footer() {
    return (
        <Navbar className="sidebar" fixed="bottom"
         expand="lg"
        bg="" variant="dark"
        >
<div><a href=""> <img className="logoimg" src="https://lh3.googleusercontent.com/T-vD9tvlcPBf_1lY-3m8hQ6J-lqBROMkMut-CN5vohyJhk-kfVjfPpb18Uk3aiGPG9_5-fbunw=w128-h128-e365"></img></a>
</div>                              
            
        <Navbar.Brand href="#home"></Navbar.Brand>

      </Navbar>
    )
}
