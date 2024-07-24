import React from "react";

import { Brand, Cta, Navbar} from './components'
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers'
import './App.css'

const App = () => {
    return (
        <div className="App"> 
            <div className="gradient__bg">
                <Navbar />
                <Header />
                <Brand />
                <Cta />
                <Blog /> 
                <Possibility /> 
                <Features />
                <WhatGPT3 />
                <Footer />


            </div>
        </div>
        
    )
}

export default App