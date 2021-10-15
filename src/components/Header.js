import React from 'react'
import {Navbar} from 'react-bootstrap';

export const Header = ({text1, text2}) => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
               <Navbar.Brand className="cont">{text1}</Navbar.Brand>
               <Navbar.Brand className="innercont">{text2}</Navbar.Brand>
            </Navbar>
        </div>
    )
}
