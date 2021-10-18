
const SearchResult = ({ results, searchKeyword, selectResult }) => {
    const submitSelectedResult = (e) => {
        if (e.code === 'Enter' || e.type === "click") {
            selectResult(e.target.textContent);
        }
    }

    const GenerateResultItem = () => {
        const resultListItems = results.map((item, index) => {
            return (
                <li onKeyPress={submitSelectedResult} onClick={submitSelectedResult} tabIndex={ 1 + index } key={index}>
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