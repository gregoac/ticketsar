import SearchWidget from "./SearchWidget";
import { DarkContext } from "../context/DarkContext";
import { useContext } from "react";

const SearchWidgetContainer = () => {

    const {isDark} = useContext(DarkContext);
  
    return (
        <>
        <div className="width-91">

        <SearchWidget isDark={isDark} />
        </div>
        </>
    )

}

export default SearchWidgetContainer;