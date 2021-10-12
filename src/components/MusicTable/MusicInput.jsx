import React from 'react'
import axios from 'axios';

export default class MusicTable extends React.Component {
    state = {
        title: '',
        album: '',
        artist: '',
        genre: '',
        release_date: ''
    };

addSong = event => {
    event.preventDefault();

    const user = {
        title: this.state.title,
        album: this.state.album,
        artist: this.state.artist,
        genre: this.state.genre,
        release_date: this.state.release_date
    }
    axios.post('http://127.0.0.1:8000/music/', { user })
        .then(res =>{
            console.log(res);
            console.log(res.data);
        });
};

render() {
    return(
    <form onSubmit={this.addSong}>
        <label> Song Title:</label>
        <input type ="text" name="title"/>
        <label> Song Album:</label>
        <input type ="text" name="album" />
        <label> Song Artist:</label>
        <input type ="text" name="artist" />
        <label> Song Genre:</label>
        <input type ="text" name="genre" />
        <label> Song Release Date:</label>
        <input type ="text" name="release_date" />
        <button type="submit">Add Song</button>
    </form>
    )
}
}