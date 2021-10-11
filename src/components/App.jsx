import React, { Component } from "react";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import MusicTable from "./MusicTable/MusicTable";

class App extends Component {
    state = {
        songs: []
    }

    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
    }
    render() {
        return (
            <div className="container-fluid">
            <TitleBar />
            <SearchBar />
            <MusicTable />
            </div>
        )
    }
}

export default App;