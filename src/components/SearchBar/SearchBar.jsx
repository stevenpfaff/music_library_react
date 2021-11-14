import React, {Component} from 'react'
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
            this.state = {
                searchQuery: '',
            }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchSong(this.state.searchQuery);
    }


    render() {
        return (
            <containter>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="search-bar"> 
                <input className="input" type="text" name="searchQuery" placeholder="Search Music..."
                onChange={this.handleChange} value={this.state.searchQuery}/>
                <button className="button" type="submit">Search</button>
                </div>
            </form>
            </containter>            
        )
    }
}

export default SearchBar;