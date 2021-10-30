import React, {Component} from 'react'
import "./CreateSong.css"
import axios from 'axios';

class CreateSong extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            album: '',
            artist: '',
            genre: '',
            release_date: ''
        }
    }

handleChange = event => {
    this.setState({ 
        [event.target.name] : event.target.value 
    })
}

handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSong(this.state);
}

addSong = async (newSong) => {
    console.log(newSong.title);
    let response = await axios.post("http://127.0.0.1:8000/music/", newSong);
    this.getAllSongs();
    return response.status;
  }

render() {
    return(
    <form onSubmit={this.handleSubmit}>
        <h2>Add Song To Library</h2><div>         
        <label> Song Title:</label>          
        <input type ="text" name="title"onChange={this.handleChange}/></div>
        <div>
        <label> Song Album:</label>
        <input type ="text" name="album" onChange={this.handleChange}/></div>
        <div>
        <label> Song Artist:</label>
        <input type ="text" name="artist"onChange={this.handleChange}/></div>
        <div>
        <label> Song Genre:</label>
        <input type ="text" name="genre"onChange={this.handleChange}/></div>
        <div>
        <label> Song Release Date:</label>
        <input type ="text" name="release_date"onChange={this.handleChange}/></div>
        <div>
        <button type="submit">Add Song</button>
        </div>
    </form>
    )
}
}

export default CreateSong