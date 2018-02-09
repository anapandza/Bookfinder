//implements navigation in header

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'

import 'styles/components/basic/HeaderNav.css'

const HeaderNav = (props) => (
    <nav className= "HeaderNav__container">      
        {
            props.links.map((link, index) => (
                    <NavLink                         
                        key={index}
                        className={'HeaderNav__link'}
                        activeClassName={'HeaderNav--active'}
                        to={`/${link.toLowerCase()}`}>
                        {link}
                    </NavLink>
            ))
        }
    </nav> 
)

export default HeaderNav