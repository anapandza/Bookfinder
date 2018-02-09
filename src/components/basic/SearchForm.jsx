//form for search area and search button


import React, { Component } from 'react'

import 'styles/components/basic/SearchForm.css'

class  SearchForm extends Component{
    state = {
        input: ""
    };

    constructor(props) {
        super(props);
        this.searchBooks = this.searchBooks.bind(this);
    }

    searchBooks() {
        let input = this.state.input;
        let newList = this.props.initialList;
        newList = newList.filter(function(item){
            return item.title.toLowerCase().search(input.toLowerCase()) !== -1;
        });
        this.props.updateBooks(newList);
    }

    render() {
        return (
            <div className="Search__container">
            <input type="text" placeholder="Search books and authors" 
                onChange={e => {this.setState({input: e.target.value})}} 
                onKeyUp={this.searchBooks}/>
            </div>
        )
    }  
}
    
export default SearchForm