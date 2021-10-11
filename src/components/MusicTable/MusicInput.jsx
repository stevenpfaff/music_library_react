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

handleChange = event => {
    this.setState({ title: event.target.value })
}

handleSubmit = event => {
    event.preventDefault();

    const user = {
        title: this.state.title
    }
    axios.post('http://127.0.0.1:8000/music/', { user })
        .then(res =>{
            console.log(res);
            console.log(res.data);
        })
};


render() {
    return(
    <form onSubmit={this.handleSubmit}>
        <label> Song Title:</label>
        <input type ="text" name="title" onChange={this.handleChange}/>
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