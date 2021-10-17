import { useEffect, useRef, useState } from 'react';
import $api from './api/index';
import SearchInput from './components/input/SearchInput'
import SearchResult from './components/cards/SearchResult';
import SearchHistory from './components/cards/SearchHistory';

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const searchTimeOut = useRef(null);
  const speech = new SpeechSynthesisUtterance();

  useEffect(() => {
    if (searchItem) {
      $api.searchUniversity(searchItem).then((results) => {
        setSearchResult(results);
        setSearchHistory((prev) => ([
          ...prev,  
          {
            name: searchItem,
            date: new Date().toLocaleString('en', { hour12: false}),
          }
        ]))
      });
    }
  }, [searchItem])

  const searchUniversity = (e) => {
    if (!e.target.value.trim()) {
      setSearchItem('');
      setSearchResult([]);
      return;
    }
    if (e.nativeEvent.data) {
      speech.text = e.nativeEvent.data;
      window.speechSynthesis.speak(speech);
    }
    // eslint-disable-next-line no-unused-expressions
    searchTimeOut.current ? clearTimeout(searchTimeOut.current) : null;
    searchTimeOut.current = setTimeout(() => {
      speech.text = e.target.value;
      setSearchItem(e.target.value);
      window.speechSynthesis.speak(speech);
    }, 1500);
  };

  const removeSearchHistory = (index=0, count=searchHistory.length) => {
    let history = [...searchHistory];
    history.splice(index, count);
    setSearchHistory(history);
  }

  return (
    <div className="App">
      <main className="search-container">
        <SearchInput submitSearch={searchUniversity}/>
        {searchResult.length ? <SearchResult results={searchResult} searchKeyword={searchItem} /> : ''}
        <SearchHistory history={searchHistory} removeHistory={removeSearchHistory}/>
      </main>
    </div>
  );
}

export default App;
