import React, { useState, useEffect } from 'react';
import RepoCard from './component/RepoCard';
import SortOptions from './component/SortOptions';
import SearchField from './component/SearchField';
import './App.css'
import Loading from './component/Loading.js';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [sortOption, setSortOption] = useState('stars');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async (query = 'react') => {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${query}&sort=${sortOption}`
      );
      const data = await response.json();
      console.log('response', data.items)
      setRepos(data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (query) => {
    fetchData(query);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    fetchData();
  };

  if (loading) {
    return <Loading />
}

  return (
    <div>
      <h1 className="heading">Users Profile</h1>
      <SearchField onSearch={handleSearch} />
      <SortOptions onSortChange={handleSortChange} />
      <div className="main">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default App;
