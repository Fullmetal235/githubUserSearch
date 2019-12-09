import React from "react";

const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  return (
    <div className='col'>
      <div className='card mt-2 mb-4' style={{ width: "18rem" }}>
        <img src={avatar_url} className='card-img-top' alt={login} />
        <div className='card-body'>
          <h5 className='card-title'>{login}</h5>
          <a href={`/user/${login}`} className='btn btn-primary'>
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserItem;