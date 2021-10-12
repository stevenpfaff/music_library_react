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
    axios
        .post('http://127.0.0.1:8000/music/', { user })
        .then(res =>{
            console.log(res);
            console.log(res.data);
        });
};

render() {
    return(
    <form onSubmit={this.addSong}>
        <label> Song Title:</label><div>
            </div>
        <input type ="text" name="title"/><div>
        <label> Song Album:</label></div>
        <input type ="text" name="album"/><div>
        <label> Song Artist:</label></div>
        <input type ="text" name="artist"/><div>
        <label> Song Genre:</label></div>
        <input type ="text" name="genre"/><div>
        <label> Song Release Date:</label></div>
        <input type ="text" name="release_date"/><div>
        </div><button type="submit">Add Song</button>
    </form>
    )
}
}