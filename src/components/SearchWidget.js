import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchWidget = ({isDark}) => {
    return (
        <div className={`search-widget width-90 ${!isDark ? 'search-widget-white' : ''}`}>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search" />
        </div>
    );
}

export default SearchWidget;