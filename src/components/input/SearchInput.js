
const SearchInput = ({submitSearch, value}) => {
    return (
        <label className="search">
          <input value={value} tabIndex="1" onChange={(e) => submitSearch(e)} type="search" />
        </label>
    )
}

export default SearchInput;