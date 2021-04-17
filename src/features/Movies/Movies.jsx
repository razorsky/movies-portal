import {useEffect, useState} from "react";

import {useStores} from "../../hooks/useStores";
import {observer} from "mobx-react-lite";

const Movies = () => {

    const { moviesStore } = useStores();

    useEffect(() => {
        moviesStore.fetchMovies();
    }, [moviesStore])

    const playVideo = (id) => () => {
        moviesStore.fetchVideoLink(id);
    }

    return (
        <div className="w-full text-center">
            <div className="grid  gap-2">
                {moviesStore.filteredByGender && moviesStore.filteredByGender.map(({title, overview, id}, index) => {
                    return (
                        <div key={index} className="md:h-52 lg:h-52 bg-gray-100 rounded-lg">
                            <h1 className="text-blue-800 font-medium uppercase">{title}</h1>
                            <p className="pt-1">{overview}</p>
                            <button onClick={playVideo(id)}>Play</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default observer(Movies);