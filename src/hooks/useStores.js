import {createContext, useContext} from "react";
import GendersStore from "../store/GendersStore";
import MoviesStore from "../store/MoviesStore";

const contextValue = {
    gendersStore: new GendersStore(),
    moviesStore: new MoviesStore()
};

export const AppContext = createContext(contextValue);

export const useStores = () => {
    return useContext(AppContext);
};