//creating root app and rendering it to root element od index.html

'use strict'

import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'    

import HeaderNav from 'components/basic/HeaderNav.jsx'
import AsideNav from 'components/basic/AsideNav.jsx'
import About from 'components/pages/About.jsx'
import Contact from 'components/pages/Contact.jsx'
import BooksPage from 'components/pages/BooksPage.jsx'
import PricesPage from 'components/pages/PricesPage.jsx'

import 'styles/main.css';

import Icon from 'react-icons-kit';
import { books } from 'react-icons-kit/icomoon';

const generalData = require("data/general.json")
const {headerLinks, fictionLinks, childrensLinks, nonfictionLinks} = generalData


const App = () => (
    <Router>
        <div className="site">
            <header>
                <div className="logo">
                    <Icon size={40} icon={books}/>   
                    <h1>Bookfinder</h1>
                </div>
                <HeaderNav links={headerLinks}/>
            </header>
            <main>
            <Route exact path="/" render={() => <Redirect to='/home'/>} />
            <Route path="/home" render={() => 
                <BooksPage type="Popular"/>}
                />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/prices" component={PricesPage}/>
            
            <Route path="/classics" render={() => 
                <BooksPage type="Classics"/>}
                />
            <Route path="/crime"render={() => 
                <BooksPage type="Crime"/>}
                />
            <Route path="/romance" render={() => 
                <BooksPage type="Romance"/>
                }/>
            <Route path="/poetry" render={() => 
                <BooksPage type="Poetry"/>
                }/>
            <Route path="/stories" render={() => 
                <BooksPage type="Stories"/>
                }/>
            <Route path="/education" render={() => 
                <BooksPage type="Education"/>
                }/>
            <Route path="/fiction" render={() => 
                <BooksPage type="Fiction"/>
                }/>
            <Route path="/comics" render={() => 
                <BooksPage type="Comics"/>
                }/>
            </main>
            <aside>
            <AsideNav links={fictionLinks} title={"Fiction"}/>
            <AsideNav links={childrensLinks} title={"Children's"}/>
            {/* <AsideNav links={nonfictionLinks} title={"Non-fiction"}/> */}
            </aside>
            <footer>
                &copy;Bookfinder 2017
            </footer>
        </div>
    </Router>
)

//rendering app component to root element in index.html
ReactDOM.render(<App/>, document.getElementById('root'))

// Supporting hot module reloading (HMR)
if (module.hot) module.hot.accept();