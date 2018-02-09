//implements navigation in aside area

import React, { Component } from 'react'
import classnames from 'classnames'
import { NavLink } from 'react-router-dom'

import 'styles/components/basic/AsideNav.css'

class AsideNav extends Component {    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="AsideNav__container">        
                <h4 className="AsideNav__title">{this.props.title}</h4>
                {
                    this.props.links.map((link, index) => (
                        <NavLink                         
                            key={index}
                            className={'AsideNav__link'}
                            activeClassName={'AsideNav--active'}
                            to={`/${link.toLowerCase()}`}>
                            {link}
                        </NavLink>
                    ))
                }
            </nav>            
        ) 
    }
}

export default AsideNav