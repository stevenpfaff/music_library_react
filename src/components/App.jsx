import React, { Component } from "react";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import MusicTable from "./MusicTable/MusicTable";
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
   render() {
        return (
            <div className = "App">
                <TitleBar />
                <SearchBar />
                <MusicTable />
            </div>
        )}
}
export default App;