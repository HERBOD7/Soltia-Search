/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import $api from './api/index';
import SearchInput from './components/input/SearchInput'
import SearchResult from './components/cards/SearchResult';
import SearchHistory from './components/cards/SearchHistory';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const searchTimeOut = useRef(null);
  const speech = new SpeechSynthesisUtterance();

  useEffect(() => {
    if (searchItem) {
      $api.searchUniversity(searchItem).then((results) => {
        setSearchResult(results);
        if (!results.length) {
          let notFoundText = `No university with ${searchItem} name was found`;
          textToSpeech(notFoundText);
        }
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
    setSearchValue(e.target.value);
    if (!e.target.value.trim()) {
      setSearchItem('');
      setSearchResult([]);
      return;
    }
    if (e.nativeEvent.data) {
      textToSpeech(e.nativeEvent.data);
    }
    // eslint-disable-next-line no-unused-expressions
    searchTimeOut.current ? clearTimeout(searchTimeOut.current) : null;
    searchTimeOut.current = setTimeout(() => {
      setSearchItem(e.target.value);
      textToSpeech(e.target.value);
    }, 1500);
  };

  const removeSearchHistory = (index=0, count=searchHistory.length) => {
    let history = [...searchHistory];
    history.splice(index, count);
    setSearchHistory(history);
  }

  const selectSearchResult = (searchResult) => {
    setSearchValue(searchResult);
    setSearchItem(searchResult);
    textToSpeech(searchResult);
  }

  const textToSpeech = (data) => {
    speech.text = data;
    window.speechSynthesis.speak(speech);
  }

  return (
    <div className="App">
      <main className="search-container">
        <SearchInput value={searchValue} submitSearch={searchUniversity}/>
        {searchResult.length ? <SearchResult selectResult={selectSearchResult} results={searchResult} searchKeyword={searchItem.toLowerCase()} /> : ''}
        <SearchHistory history={searchHistory} removeHistory={removeSearchHistory}/>
      </main>
    </div>
  );
}

export default App;
