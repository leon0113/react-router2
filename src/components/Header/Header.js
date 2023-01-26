import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import "./Header.css"

const Header = () => {
    return (
        <div>
            <h1>Welcome to my Route website</h1>
            <nav className='nav'>
                <NavLink

                    to="/"
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink

                    to="/friends"
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : ""
                    }
                >
                    Friends
                </NavLink>
                <NavLink

                    to="/about"
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : ""
                    }
                >
                    About
                </NavLink>
                <NavLink

                    to="/custom"
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : ""
                    }
                >
                    CustomLink
                </NavLink>


            </nav>
        </div>
    );
};

export default Header;