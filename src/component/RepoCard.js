import React from 'react';

const RepoCard = ({ repo }) => {
  return (
    <div className='card'>
      <div className="image">
      <img src={repo.owner.avatar_url} alt="Avatar" />
      <p>Name: {repo.name}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Description: {repo.description}</p>
      <p>Language: {repo.language}</p>
      </div>
    </div>
  );
};

export default RepoCard;
