import { makeObservable, observable } from "mobx"
import queryString from "querystring";

class GendersStore {
    genders = [];

    fetchGenders() {
        const params = queryString.stringify({
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en-US'
        })

        const url = new URL('3/genre/movie/list', 'https://api.themoviedb.org');

        const target = `${url.href}?${params}`;

        fetch(target)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(({genres}) => {
            this.genders = genres;
        })
    }

    constructor() {
        makeObservable(this, {
            genders: observable
        })
    }
}

export default GendersStore;