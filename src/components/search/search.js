import React, { useState } from "react";
import './search.css';
const SearchForm = props => {
  const [state, setState] = useState("");
  const handleStateChange = evt => setState(evt.target.value);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (state === "") {
      props.fireAlert("Search field should not be emptied");
    } else {
      props.searchUsers(state);
      setState("");
    }
  };

  return (
    <div className='mb-3'>
      <form onSubmit={handleSubmit}>
        <div className='form-row align-items-center'>
          <div className='col-7'>
            <input
              type='text'
              className='input'
              placeholder='Search Users...'
              value={state}
              onChange={handleStateChange}
            />
          </div>
          <div className='col-auto'>
            <input
              type='submit'
              className='btn'
              value='Search'
            />
          </div>
        </div>
      </form>
      {props.showClear && (
        <button
          type='button'
          className='btn'
          onClick={props.clearUsers}
          style={{ letterSpacing: ".2rem" }}
        >
          Clear Search
        </button>
      )}
    </div>
  );
};

export default SearchForm;
