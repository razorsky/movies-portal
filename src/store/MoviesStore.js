import {action, makeObservable, observable} from "mobx"
import queryString from "querystring";

class MoviesStore {
    movies = [];
    filteredByGender = [];
    video = null;

    fetchMovies() {
        const params = queryString.stringify({
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1,
        })

        const url = new URL('3/movie/top_rated', 'https://api.themoviedb.org');

        const target = `${url.href}?${params}`;

        fetch(target)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(({results}) => {
            this.movies = results;
            this.filteredByGender = results;
        });
    }
    filterByGender(gender) {
        this.filteredByGender = this.movies.filter(item => {
            return item.genre_ids.includes(gender)
        })
    }
    fetchVideoLink(id) {
        const params = queryString.stringify({
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US',
            page: 1,
        })

        const url = new URL(`3/movie/${id}/videos`, 'https://api.themoviedb.org');

        const target = `${url.href}?${params}`;

        fetch(target)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(({results}) => {
                this.video = results;
            // this. = results;
            // this.filteredByGender = results;
        });
    }
    constructor() {
        makeObservable(this, {
            movies: observable,
            filteredByGender: observable,
            filterByGender: action
        })
    }
}

export default MoviesStore;