import React, { Component } from "react";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";
import SearchBar from "./SearchBar/SearchBar";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container-fluid">
            <TitleBar />
            <SearchBar />
            </div>
        )
    }
}

export default App;