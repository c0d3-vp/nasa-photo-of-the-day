import React from 'react';
import styled from 'styled-components'

function Header({name, children}) {
    return (
        <StyledHeader>
            <h1>
                NASA Photo of the Day<span role="img" aria-label="go!"></span>
            </h1> 
        </StyledHeader>
    )
}

const StyledHeader = styled.header `
font-size: 30px;

h1 {
    border: 2px dotted mediumaquamarine;
    border-radius: 10px;
    text-shadow: 3px 3px mediumaquamarine;
    padding: 15px;
    width: 700px;
    margin: 0 auto;
}
`
export default Header