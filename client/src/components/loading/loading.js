import React from "react";

const Loading = () => {
  return (
    <div className="text-center" style={{ marginTop: "15rem"}}>
      <div className='Loading-grow text-primary' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
      <div className='Loading-grow text-secondary' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
      <div className='Loading-grow text-success' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
      <div className='Loading-grow text-danger' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
      <div className='Loading-grow text-warning' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
      <div className='Loading-grow text-info' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
      <div className='Loading-grow text-light' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
      <div className='Loading-grow text-dark' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;