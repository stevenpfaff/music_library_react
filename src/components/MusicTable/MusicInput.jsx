import React from 'react'
import axios from 'axios';
import './MusicTable.css'

export default class MusicInput extends React.Component {
    state = {
        title: '',
        album: '',
        artist: '',
        genre: '',
        release_date: ''
    };

handleChange = event => {
    this.setState({ title: event.target.value });
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
    axios
        .post(`http://127.0.0.1:8000/music/`)
        .then(res =>{
            console.log(res);
            console.log(res.data);
        });
};

render() {
    return(
    <form onSubmit={this.addSong}>
        <h2>Add Song To Library</h2>
        <label> Song Title:</label><div>
            </div>
        <input type ="text" name="title"onChange={this.handleChange}/><div>
        <label> Song Album:</label></div>
        <input type ="text" name="album" onChange={this.handleChange}/><div>
        <label> Song Artist:</label></div>
        <input type ="text" name="artist"onChange={this.handleChange}/><div>
        <label> Song Genre:</label></div>
        <input type ="text" name="genre"onChange={this.handleChange}/><div>
        <label> Song Release Date:</label></div>
        <input type ="text" name="release_date"onChange={this.handleChange}/><div>
        </div><button onSubmit={this.addSong}>Add Song</button>
    </form>
    )
}
}