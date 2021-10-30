import React, {Component} from 'react'
import axios from 'axios';
import './MusicTable.css'

class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs:[]
         }
    }

    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
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

render() {
    return(
    <div className="app-container">
        <h1> Song Library </h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Delete Song</th>
                </tr>
            </thead>
                {this.state.songs.map((song) => (
                    
                <tbody>
                    <tr>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                    <td><button onClick={()=>this.deleteSong(song.id)}>Delete Song</button></td>
                    </tr>
                </tbody>
                
                ))}
            </table>
        </div>
    );
}
}

export default MusicTable;