//displays all books for specific category

import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

import SearchForm from 'components/basic/SearchForm.jsx'
import About from 'components/pages/About.jsx'
import 'styles/components/pages/BooksPage.css'

let data = require("data/books.json")     

class BooksPage extends Component { 
    state = {
        books: []
    }

    constructor(props) {
        super(props)
        this.arrayContains = this.arrayContains.bind(this);
        this.updateBooks = this.updateBooks.bind(this);
        this.viewPricesClick = this.viewPricesClick.bind(this);
    }

    componentWillMount() {
        this.setState({books: data});
    }

    updateBooks(updatedBooks) {
        this.setState({books: updatedBooks});
    }

    arrayContains(book, array) {
        return (array.indexOf(book) > -1)
    }

    viewPricesClick(){
        this.props.history.push("/prices");
    }

    render() {
        return (
            <div>
                <SearchForm
                    initialList = {data}  
                    updateBooks = {this.updateBooks}
                />
                <div>
                {
                    this.state.books == data ?
                    <div>
                        <h2>{this.props.type}</h2>
                        <div>
                        {
                        this.state.books.map(book => {                      
                            if(!this.arrayContains(this.props.type, book.genres)) return;
                            return (
                                <div className="Book__container" onClick={this.viewPricesClick}>
                                    <img src={book.url} className="Book__image"/>
                                    <div className="Book__data">
                                        <div className="Book__details">
                                            <span className="Book__title">{book.title}</span>
                                            <br/>
                                            <span className="Book__desc">{book.description}</span>
                                        </div>
                                        <div className="Book__priceButton--div">
                                            <button className="Book__priceButton">View Prices</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            );
                        })
                        }
                        </div>
                    </div>
                    :
                    <div>
                        <h2>Results</h2>
                        <div>
                        {
                            this.state.books.length == 0 ?
                            <div>
                                <h4>Sorry, nothing was found.</h4>
                                <p>Please check your spelling and try again.</p>
                            </div>
                            :
                                this.state.books.map(book => {                      
                                    return (
                                        <div className="Book__container" onClick={this.viewPricesClick}>
                                            <img src={book.url} className="Book__image"/>
                                            <div className="Book__data">
                                                <div className="Book__details">
                                                    <span className="Book__title">{book.title}</span>
                                                    <br/>
                                                    <span className="Book__descript">{book.description}</span>
                                                </div>
                                                <button className="Book__priceButton">View Prices</button>
                                            </div>
                                        </div>
                                    );
                                })
                        }
                        </div>
                    </div>
                }
                </div>
            </div>
        )
    }
}

export default withRouter(BooksPage);