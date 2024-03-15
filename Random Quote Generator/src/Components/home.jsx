import React from "react";
import '../Styles/home.css';

export default class Home extends React.Component{
    
    constructor(){
        super();
        this.quotes={
            "0":{qoute:"“Be yourself; everyone else is already taken.”",author:"Oscar Wilde"},
            "1":{qoute:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",author:"Albert Einstein"},
            "2":{qoute:"“Be the change that you wish to see in the world.”",author:"Mahatma Gandhi"},
            "3":{qoute:"“To live is the rarest thing in the world. Most people exist, that is all.”",author:"Oscar Wilde"},
        };
        this.state = {quote:this.quotes[0].qoute,author:this.quotes[0].author};
    }

    quoteGenerator =() =>{
        const num = String(Math.floor(Math.random()*4));
        this.setState({quote:this.quotes[num].qoute,author:this.quotes[num].author});
    }
    render(){
        return(
            <div id="wrapper">
                <div id="quote-box">
                    <p id="text">{this.state.quote}</p>
                    <h6 id="author">- {this.state.author}</h6>
                    <div className="buttons"> 
                        <button id="new-quote" onClick={this.quoteGenerator}>NEW QUOTE</button>
                        <a id="tweet-quote" href="https://www.google.com" target="_blank">Tweet</a>
                    </div>
                </div>
                <div id="footer">
                    Prasanna V B
                </div>
            </div>
    
        );
    }
}