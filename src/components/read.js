import React from 'react';
import { Movies } from './movies';
import axios from 'axios';


export class Read extends React.Component {

    state = {
        movies: []

    };
    componentDidMount() { //Component Lifecycle Hook
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')//Retrieves information from url(JSON file) and returns a promise
            .then(
                (response) => {
                    this.setState({ movies: response.data.Search })//Updates Movies Array
                })
            .catch(
                (error) => { console.log(error) }
            );
    }//End of Promise

    render() {
        return (

            <div>
                <h1>Welcome to The Movie Page</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}

