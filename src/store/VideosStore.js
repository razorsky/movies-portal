import {makeObservable, observable} from "mobx"
import queryString from "querystring";

class VideosStore {
    videos = [];

    fetchVideos(id) {
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
                this.videos = results;
            });
    }
    constructor() {
        makeObservable(this, {
            videos: observable,
        })
    }
}

export default VideosStore;