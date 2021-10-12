import React from 'react'
import axios from 'axios';
import './MusicTable.css'

export default class MusicTable extends React.Component {
    state = {
        songs: [],
    };

componentDidMount(){
    axios.get('http://127.0.0.1:8000/music/').then(res => {
        console.log(res);
        this.setState({ songs : res.data });
    });
}



render() {
    return(
    <ul>
        <h1> Song Library </h1>
        <h4>Title, Album, Artist, Genre, Release Date</h4>
        {this.state.songs.map(song => (
    <li key={song.id}>{song.title}, {song.album}, {song.artist}, {song.genre}, {song.release_date}<button onClick> Delete Song </button></li>
        ))}    
    </ul>
    )
}
}