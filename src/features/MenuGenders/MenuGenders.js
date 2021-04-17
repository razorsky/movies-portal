import {useEffect, useState} from "react";
import {useStores} from "../../hooks/useStores";
import clsx from "clsx";
import {observer} from "mobx-react-lite";

const MenuGenders = () => {

    const {gendersStore, moviesStore} = useStores();

    const [selection, setSelection] = useState();

    useEffect(() => {
        gendersStore.fetchGenders();
    }, [gendersStore])

    const handleClick = (id) => (e) => {
        e.preventDefault();
        moviesStore.filterByGender(id);
        setSelection(id);
    }

    return (
        <div className="w-1/4 mr-2">
            <ul>
                {gendersStore.genders.map(({name, id}, index) => {
                    return (
                        <li onClick={handleClick(id)} key={index} className={clsx(  "cursor-pointer", "first:pt-3", "pb-3", "pl-3", "pt-3", "w-full", "hover:bg-blue-900", "hover:text-white",
                            {
                                "bg-blue-900": selection === id,
                                "text-white": selection === id,
                            })}>
                            <span>{name}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default observer(MenuGenders);