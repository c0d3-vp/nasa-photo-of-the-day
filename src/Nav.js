import React from 'react';
import styled from 'styled-components'

function MyNav() {
    return (
        <StyledNav>
            <a href="about.html">About</a>
            <a href="gallery.js">Gallery</a>
            <a href="contact.js">Contact</a>
       
        </StyledNav>
    )
}

const StyledNav = styled.nav `
    display: flex;
    justify-content: space-around;
    padding-top: 25px;
    
    a{
        color: mediumaquamarine;
        text-decoration: none;
        font-weight: bold;
        font-size: 25px;
        &:hover {
            border-bottom: 1px dotted white;
            color: yellow;
            font-weight: bold;
        }
    }
`


export default MyNav;