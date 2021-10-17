
const SearchHistory = ({ history, removeHistory }) => {
    const GenerateHistoryItem = () => {
        const historyListItems = history.map((item, index) => {
            return (
                <li className="search-history-item"  key={index}>
                    <p>{item.name}</p>
                    <div className="search-history-date">
                    <p>{item.date}</p>
                    <button aria-label="Remove History" onClick={() => removeHistory(index, 1)} className="search-history-remove">X</button>
                    </div>
                </li>
            )
        });
        return <ul>{historyListItems}</ul>
    }
    return (
        <div className="search-history">
          <div className="search-history-header">
            <h4>Search history</h4>
            {history.length ? <button aria-label="Clear Search History" onClick={() => removeHistory()}>clear search history</button> : ''}
          </div>
          <GenerateHistoryItem />
        </div>
    )
}

export default SearchHistory;