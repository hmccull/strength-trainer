import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

function NavigationBar({ user, setUser }) {

    function logOut() {
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        })
    }

    function logOutElement() {
        return (
            <NavItem>
                <NavLink href="/" onClick={logOut}>
                    Log Out
                </NavLink>
            </NavItem>
        )
    }
    
    // add Welcome, user! 

    return (
        <div id='nav-bar'>
            <Navbar
                color="dark"
                dark
                expand="sm"
                fixed="top"
                full
            >
                <NavbarBrand href="/">
                    Strength Trainer
                </NavbarBrand>
                <Nav
                    className="ml-auto"
                    navbar
                >
                    {user ? 
                    logOutElement()
                    :
                    <NavItem>
                        <NavLink href="/login">
                            Login
                        </NavLink>
                    </NavItem>
                    }

                    {!user ? 
                    <NavItem>
                        <NavLink href="/signup">
                            Signup
                        </NavLink>
                    </NavItem> : null}
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavigationBar;