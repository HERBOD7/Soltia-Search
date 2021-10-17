
const SearchInput = ({submitSearch}) => {
    return (
        <label className="search">
          <input onChange={(e) => submitSearch(e)} type="search" />
        </label>
    )
}

export default SearchInput;