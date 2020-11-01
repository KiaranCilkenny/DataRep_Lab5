import React from 'react';


export class Create extends React.Component {

    constructor() {
        super();   //Calls on the component of the parent class

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: '',


        }
    }
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault(); //Stops from calling this button mutliple times
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster)
    }

    render() {
        return (

            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>


                    <div className='form-group'>
                        <label>Movies Poster: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}></textarea>

                    </div>


                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='buttn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }
}