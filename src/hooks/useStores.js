import {createContext, useContext} from "react";
import GendersStore from "../store/GendersStore";
import MoviesStore from "../store/MoviesStore";
import VideosStore from "../store/VideosStore";

const contextValue = {
    gendersStore: new GendersStore(),
    moviesStore: new MoviesStore(),
    videosStore: new VideosStore()
};

export const AppContext = createContext(contextValue);

export const useStores = () => {
    return useContext(AppContext);
};