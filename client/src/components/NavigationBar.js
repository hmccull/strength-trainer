import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

function NavigationBar({ user, setUser }) {

    function logOut() {
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser({});
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

    return (
        <div id='nav-bar'>
            <Navbar
                color="dark"
                dark
                expand="md"
                fixed="top"
            >
                <NavbarBrand href="/">
                    Strength Trainer
                </NavbarBrand>
                <Nav
                    className="ml-auto"
                    navbar
                >
                    {user ? <NavItem>
                                <NavLink href='/me'>
                                    Welcome, {user.username}!
                                </NavLink>
                            </NavItem> 
                        : null
                    }

                    {user ? 
                    logOutElement()
                        :
                        <NavItem>
                            <NavLink href="/">
                                Login
                            </NavLink>
                        </NavItem>
                    }

                    {!user ? 
                        <NavItem>
                            <NavLink href="/signup">
                                Signup
                            </NavLink>
                        </NavItem> 
                        : null
                    }
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavigationBar;