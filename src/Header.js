import React from 'react';

function Header({name, children}) {
    return (
        <header>
            <h1>
                NASA Photo of the Day<span role="img" aria-label="go!">🚀</span>
            </h1> 
        </header>
    )
}

export default Header