//example of page with listed stores

import React, { Component } from 'react'

import 'styles/components/pages/PricesPage.css'

class  PricesPage extends Component{
    render() {
        return (
            <div>
                <h2>City of the Lost, Kelley  Armstrong</h2>
                <div className="Book__info">
                    <img src="./assets/images/fiction/CityoftheLost.jpg" className="Book__image"/> 
                    <span className="Book__about">Casey Duncan once killed a man and got away with it. Since then she’s 
                    become a talented police detective, tethered only to her job, 
                    her best friend, Diana, and the occasional evening with her sexy, no-strings-attached 
                    ex-con lover, Kurt. But then Diana's abusive ex finds her again, 
                    despite all Casey has done to help her disappear.</span>
                </div>
                <h3>Available in stores</h3>
                <br/>
                <div className="Store__grid">
                    <div className="Stores">
                        <div className="Store__container first" onClick={()=> window.open("https://www.thriftbooks.com/w/city-of-the-lost_kelley-armstrong/9871193/#isbn=1250092167", "_blank")}>
                            <img src="./assets/images/thriftbooks.jpg" width="150px" height="40px"/>
                            <button className="Store__button"><span className="Book__price">4$</span> Go to store</button>
                        </div>
                        <br/>
                        <div className="Store__container first" onClick={()=> window.open("https://www.abebooks.com/servlet/BookDetailsPL?bi=22404004086&searchurl=isbn%3D075156253X", "_blank")}>
                            <img src="./assets/images/abebooks.jpg" width="130px" height="50px"/>
                            <button className="Store__button"><span className="Book__price">5$</span> Go to store</button>
                        </div>
                    </div>
                    <div className="Stores">
                        <div className="Store__container" onClick={()=> window.open("https://www.bookdepository.com/City-of-the-Lost-Kelley-Armstrong/9780751562538", "_blank")}>
                            <img src="./assets/images/bookdepository.png" width="130px" height="50px"/>
                            <button className="Store__button"><span className="Book__price">10$</span> Go to store</button>
                        </div>
                        <br/>
                        <div className="Store__container" onClick={()=> window.open("https://www.kobo.com/us/en/ebook/city-of-the-lost-3", "_blank")}>
                            <img src="./assets/images/rakutenkobo.png" width="140px" height="40px"/>
                            <button className="Store__button"><span className="Book__price">10$</span> Go to store</button>
                        </div>
                    </div>
                    <div className="Stores">
                        <div className="Store__container" onClick={()=> window.open("https://www.amazon.com/City-Lost-Rockton-Duncan-Novels/dp/1250092140", "_blank")}>
                            <img src="./assets/images/amazon.jpg" width="140px" height="50px"/>
                            <button className="Store__button"><span className="Book__price">10$</span> Go to store</button>
                        </div>
                        <br/>
                        <div className="Store__container" onClick={()=> window.open("https://www.barnesandnoble.com/w/city-of-the-lost-kelley-armstrong/1122537922#/", "_blank")}>
                            <img src="./assets/images/barnesnoble.png" width="140px" height="30px" margin="0 0 0 3px"/>
                            <button className="Store__button"><span className="Book__price">11$</span> Go to store</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }  
}
    
export default PricesPage