import React, {Component} from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
    state = {
        btnEnabled: true
    };
    pageNo = 1;

    componentDidMount() {
        this._getMovies();
    }

    _renderMovies = () => {
        return this.state.movies.map(movie => {
            return (
                <Movie
                    title={movie.title_english}
                    poster={movie.large_cover_image}
                    key={movie.id}
                    genres={movie.genres}
                    synopsis={movie.synopsis}
                />
            );
        });
    };

    _renderButton = (isLoading) => {
        return isLoading === undefined ? null : <div className="Button__Container">
            <button className='Button_More' disabled={!this.state.btnEnabled} onClick={this._requestNextPage}>
                {this.state.btnEnabled ? "View more" : "Loading"}
            </button>
        </div>
    };

    _getMovies = async () => {
        const movies = await this._callApi();
        this.setState({
            btnEnabled: true,
            movies: this.state.movies ? this.state.movies.concat(movies) : movies
        });
    };

    _callApi = () => {
        const url = "https://yts.am/api/v2/list_movies.json?limit=10&page=" + this.pageNo + "&sort_by=download_count";
        return fetch(url)
            .then(response => response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err));
    };

    _requestNextPage = () => {
        this.setState(prevState => ({
            btnEnabled: false,
            movies: prevState.movies
        }));
        this.pageNo++;
        this._getMovies();
    };

    render() {
        const {movies} = this.state;
        return (
            <div className={movies ? "App" : "App--loading"}>
                {movies ? this._renderMovies() : "Loading"}
                {this._renderButton(movies)}
            </div>
        );
    }
}

export default App;