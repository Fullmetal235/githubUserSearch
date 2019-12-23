import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div>
      <div className='card mb-2' style={{ width: "80%" }}>
        <div className='card-body'>
          <h5 className='card-title text-dark' style={{fontSize: '1.5rem'}}>Name: {repo.name}</h5>
          <p className='card-text text-info' style={{fontSize: '1rem'}}>Pushed At: {repo.pushed_at}</p>
          <p className='card-text text-dark' style={{fontSize: '1rem'}}>Last Updated: {repo.updated_at}</p>
          <p className='card-text text-danger' style={{fontSize: '1rem'}}>Forks Count: {repo.forks_count}</p>
          <a href={repo.html_url} className='btn btn-info'>
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;