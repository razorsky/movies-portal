import Movies from "../../features/Movies";
import MenuGenders from "../../features/MenuGenders";

const Layout = () => {
    return (
        <div className="flex">
            <MenuGenders />
            <Movies />
        </div>
    )
}

export default Layout;