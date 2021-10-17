
const SearchResult = ({ results, searchKeyword }) => {
    const GenerateResultItem = () => {
        const resultListItems = results.map((item, index) => {
            return (
                <li key={index}>
                    {item.name.toLowerCase().split(searchKeyword)[0]}
                    <span className="search-results-equal">{searchKeyword}</span>
                    {item.name.toLowerCase().split(searchKeyword)[1]}
                </li>
            )
        });
        return <>{resultListItems}</>;
    }

    return (
        <ul className="search-results">
          <GenerateResultItem />
        </ul>
    );
}

export default SearchResult;