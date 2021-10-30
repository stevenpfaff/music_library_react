import React, { Component } from "react";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";
import SearchBar from "./SearchBar/SearchBar";
import CreateSong from './CreateSong/CreateSong'
import MusicTable from "./MusicTable/MusicTable";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: [],
        }
    }
    
    componentDidMount(){
        this.getAllSongs();
    }

    getAllSongs = async () => {
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs: response.data
        })
    }

    deleteSong = async (songid) => {
        let response = await axios.delete('http://127.0.0.1:8000/music/' + songid + '/')
        this.getAllSongs(); 
        return response.status;  
    }

    addSong = async (newSong) => {
        let response = await axios.post("http://127.0.0.1:8000/music/", newSong);
        this.getAllSongs();
        return response.status;
      }

   render() {
        return (
            <div className = "App">
                <TitleBar />
                <SearchBar />
                <MusicTable getAllSongs={this.getAllSongs} deleteSong={this.deleteSong}/>
                <CreateSong addSong={this.addSong}/>
            </div>
        )}
}
export default App;