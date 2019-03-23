import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <div className ="container">
                <Header />
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Footer />
                </div>
               
            </BrowserRouter>
        )
    }
}
export default App;